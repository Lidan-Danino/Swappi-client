import { useState, useEffect } from "react";
import { Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import SimpleSider from "../components/Siders/SimpleSider";
import { getSpecific, editProduct } from "../services/productData";

function Edit({ match, history }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [error, setError] = useState(null);
  const productId = match.params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
    getSpecific(productId)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, [productId]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setProduct({ ...product, [e.target.name]: e.target.value });
    if (e.target.files) {
      if (e.target.files[0].type.includes("pdf")) {
        setProduct({ ...product, pdf: e.target.files[0] });
      }
      if (e.target.files[0].type.includes("image")) {
        setProduct({ ...product, image: e.target.files[0] });
      }
    }
  };

  const onSubmitHandler = async (e) => {
    //TODO: Rewrite this
    e.preventDefault();
    let { _id, title, price, description, city, category, image, pdf } = product;
    let obj = { title, price, description, city, category };
    setLoading(true);
    await getBase64(image)
      .then((data) => {
        obj["image"] = data;
      })
      .catch((err) => console.error("Converting to base64 err: ", err));

    await getBase64(pdf)
      .then((data) => {
        obj["pdf"] = data;
      })
      .catch((err) => console.error("Converting to base64 err: ", err));

    await editProduct(_id, obj)
      .then((res) => {
        if (!res.error) {
          history.push(`/categories/${category}/${_id}/details`);
        } else {
          setLoading(false);
          setError(res.error);
          setAlertShow(true);
        }
      })
      .catch((err) => console.error("edit product err: ", err));
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  return (
    <>
      <SimpleSider />
      <div className="container">
        <h1 className="heading">Edit product</h1>
        <Form onSubmit={onSubmitHandler}>
          {alertShow && (
            <Alert variant="danger" onClose={() => setAlertShow(false)} dismissible>
              <p>{error}</p>
            </Alert>
          )}
          <Form.Row>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={product.title}
                onChange={onChangeHandler}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                placeholder="Price"
                name="price"
                value={product.price}
                onChange={onChangeHandler}
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridDescription.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              defaultValue={product.description}
              onChange={onChangeHandler}
              required
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                placeholder="Sderot"
                value={product.city}
                onChange={onChangeHandler}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={product.category}
                name="category"
                onChange={onChangeHandler}
                required
              >
                <option>Choose...</option>
                <option>Flights</option>
                <option>Vacation</option>
                <option>Concert</option>
                <option>Sport</option>
                <option>Hotel</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridImage">
              <Form.Label>New Image - Optional</Form.Label>
              <Form.Control name="image" type="file" onChange={onChangeHandler} />
            </Form.Group>
          </Form.Row>
          <Form.Label>New Ticket - Optional</Form.Label>
          <Form.Control name="pdf" type="file" onChange={onChangeHandler} />

          {loading ? (
            <Button className="col-lg-12" variant="dark" disabled>
              Please wait... <Spinner animation="border" />
            </Button>
          ) : (
            <Button className="col-lg-12" variant="dark" type="submit">
              Add product
            </Button>
          )}
        </Form>
      </div>
    </>
  );
}

export default Edit;
