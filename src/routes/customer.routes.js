import { Router } from "express";
import {
  createCustomers,
  deleteCustomer,
  editCustomer,
  renderCustomers,
  updateCustomer,
  downloadExcel, // Agrega esta importación
} from "../controllers/customerController.js";

const router = Router();

router.get("/", renderCustomers);
router.post("/add", createCustomers);
router.get("/update/:id", editCustomer);
router.post("/update/:id", updateCustomer);
router.get("/delete/:id", deleteCustomer);
router.get("/download", downloadExcel);

export default router;
