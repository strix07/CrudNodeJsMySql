import { pool } from "../db.js";
import ExcelJS from "exceljs"; // Importa la biblioteca ExcelJS

export const renderCustomers = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM customer");
  res.render("customers", { customers: rows });
};

export const createCustomers = async (req, res) => {
  const newCustomer = req.body;
  await pool.query("INSERT INTO customer set ?", [newCustomer]);
  res.redirect("/");
};

export const editCustomer = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM customer WHERE id = ?", [
    id,
  ]);
  res.render("customers_edit", { customer: result[0] });
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  await pool.query("UPDATE customer set ? WHERE id = ?", [newCustomer, id]);
  res.redirect("/");
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM customer WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Customer deleted" });
  }
  res.redirect("/");
};

// Define la función para descargar el archivo Excel

export const downloadExcel = async (req, res) => {
  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Clientes");

    // Obtener los datos de los clientes desde la base de datos
    const [rows] = await pool.query("SELECT * FROM customer");

    // Definir las columnas
    worksheet.columns = [
      { header: "ID", key: "id", width: 10, alignment: { horizontal: "left" } },
      {
        header: "Name",
        key: "name",
        width: 20,
        alignment: { horizontal: "left" },
      },
      {
        header: "Address",
        key: "address",
        width: 30,
        alignment: { horizontal: "left" },
      },
      {
        header: "Phone",
        key: "phone",
        width: 15,
        alignment: { horizontal: "left" },
      },
    ];

    // Agregar los datos de los clientes a la hoja de cálculo
    rows.forEach((customer, index) => {
      worksheet.addRow({
        id: customer.id,
        name: customer.name,
        address: customer.address,
        phone: customer.phone,
      });
    });

    // Configurar la respuesta HTTP para descargar el archivo Excel
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment; filename=clientes.xlsx");

    // Escribir el libro de Excel en el flujo de respuesta
    await workbook.xlsx.write(res);

    // Finalizar la respuesta
    res.end();
  } catch (error) {
    console.error("Error al descargar el archivo Excel:", error);
    res.status(500).send("Error al descargar el archivo Excel");
  }
};
