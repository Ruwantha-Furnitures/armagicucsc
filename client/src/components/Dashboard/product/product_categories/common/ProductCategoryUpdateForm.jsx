import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import { ToastContainer } from "react-toastify";
import ProductViewFormStyle from "../../../../../css/dashboard/ProductViewForm.module.css";
import ProductCategoryList from "./ProductCategoryList";
import { Link, useParams } from "react-router-dom";
import { notification } from "../../../utils/notification";
import {
  getProductCategoriesDetails,
  editProductCategoriesDetails,
} from "./../../../service/productCategory";

function ProductCategoryUpdateForm() {
  const { id } = useParams();

  const [category, setCategory] = useState({
    name: "",
  });

  const [errors, setErrors] = useState({});

  const schema = {
    name: Joi.string().required().label("New Category"),
  };

  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    try {
      const result = await getProductCategoriesDetails(id);
      setCategory(result.data);
    } catch (error) {
      console.log("Error ", error.message);
    }
  };

  const validateInput = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  const onInputChange = (e) => {
    const newErrors = { ...errors };
    // validation
    const errorMessage = validateInput(e.target);
    if (errorMessage) newErrors[e.target.name] = errorMessage;
    else delete newErrors[e.target.name];

    console.log(newErrors);
    setErrors(newErrors);
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    try {
      const response = await editProductCategoriesDetails(id, category);
      notification(
        "Product Category Updated",
        `/dashboard/product/viewProductCategory/${id}`
      );
      // window.location = `/dashboard/product/viewProductCategory/${id}`;
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem with the server: ", error);
      } else {
        console.log(error.response.data.msg);
      }
    }
  };

  return (
    <React.Fragment>
      <div className={ProductViewFormStyle.titleHeader}>
        <h1 className={ProductViewFormStyle.tableTitleHeaderStyle}>
          Product Category Update
        </h1>
        <div className={ProductViewFormStyle.backSection}>
          <div className={ProductViewFormStyle.back}>
            <Link
              to="/dashboard/products"
              className={ProductViewFormStyle.linkStyle}
            >
              <div className={ProductViewFormStyle.backStyle}>
                <span
                  className={
                    "material-icons " + ProductViewFormStyle.backIconStyle
                  }
                >
                  arrow_back_ios
                </span>
                <div className={ProductViewFormStyle.backButtonStyle}>Back</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className={ProductViewFormStyle.details}>
          <div className={ProductViewFormStyle.imgDescPart}>
            <div className={ProductViewFormStyle.typeForm}>
              <div className={ProductViewFormStyle.descTitle}>
                <div className={ProductViewFormStyle.dataProductTitleNew}>
                  <div className={ProductViewFormStyle.dataFormNew}>
                    <label className={ProductViewFormStyle.labelProductTitle}>
                      New Category
                    </label>
                    <input
                      type="text"
                      value={category.name}
                      name="name"
                      placeholder="Update Product Category"
                      onChange={(e) => onInputChange(e)}
                      className={ProductViewFormStyle.inputProductTitle}
                    />
                  </div>
                  {errors["name"] && (
                    <div className={ProductViewFormStyle.inputErrorDesc}>
                      <span
                        className={
                          "material-icons " + ProductViewFormStyle.iconWidth
                        }
                      >
                        error
                      </span>
                      <span className={ProductViewFormStyle.inputErrorText}>
                        {errors["name"]}
                      </span>
                    </div>
                  )}
                </div>
                <div className={ProductViewFormStyle.descButtonsAddType}>
                  <div className={ProductViewFormStyle.descButtonAdd}>
                    <button
                      className={
                        ProductViewFormStyle.buttonStyle +
                        " " +
                        ProductViewFormStyle.successButtonColor
                      }
                      disabled={
                        Object.keys(errors).length === 0 && isSubmit === false
                          ? false
                          : true
                      }
                    >
                      Update
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
            <div className={ProductViewFormStyle.typesList}>
              <ProductCategoryList />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ProductCategoryUpdateForm;
