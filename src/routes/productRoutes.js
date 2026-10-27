const { Router } = require("express");
const router = Router();
const {
  getProducts,
  getProduct,
  createProduct,
  replaceCategory,
  deleteCategory,
} = require("../controllers/productControllers");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);

router.put("/:id/categoria", replaceCategory);
router.delete("/:id/categoria", deleteCategory);

module.exports = router;
