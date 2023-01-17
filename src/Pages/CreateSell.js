import { Component } from "react";
import { Form, Button, Col, Spinner, Alert } from "react-bootstrap";
import { createProduct } from "../services/productData";
import SimpleSider from "../components/Siders/SimpleSider";
import "../components/CreateSell/CreateSell.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: "",
      description: "",
      city: "",
      category: "",
      image: "",
      pdf: "",
      loading: false,
      alertShow: false,
      errors: [],
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.files) {
      if (e.target.files[0].type.includes("pdf")) {
        this.setState({ pdf: e.target.files[0] });
      }
      if (e.target.files[0].type.includes("image")) {
        this.setState({ image: e.target.files[0] });
      }
    }
  }

  async onSubmitHandler(e) {
    e.preventDefault();
    let { title, price, description, city, category, image, pdf } = this.state;
    let obj = { title, price, description, city, category };

    await this.getBase64(image)
      .then((data) => {
        obj["image"] = data;
      })
      .catch((err) => console.error("Converting to base64 err: ", err));

    await this.getBase64(pdf)
      .then((data) => {
        obj["pdf"] = data;
      })
      .catch((err) => console.error("Converting to base64 err: ", err));

    this.setState({ loading: true });
    createProduct(obj)
      .then((res) => {
        if (res.error) {
          this.setState({ loading: false });
          this.setState({ errors: res.error });
          this.setState({ alertShow: true });
        } else {
          this.props.history.push(`/categories/${category}/${res.productId}/details`);
        }
      })
      .catch((err) => console.error("Creating product err: ", err));
  }

  async getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  render() {
    return (
      <>
        <SimpleSider />
        <div className="container">
          <h1 className="heading">Add a Product</h1>
          <Form onSubmit={this.onSubmitHandler}>
            {this.state.alertShow && (
              <Alert
                variant="danger"
                onClose={() => this.setState({ alertShow: false })}
                dismissible
              >
                <p>{this.state.errors}</p>
              </Alert>
            )}
            <Form.Row>
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  name="title"
                  required
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Price"
                  name="price"
                  required
                  onChange={this.onChangeHandler}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridDescription.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                required
                onChange={this.onChangeHandler}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  placeholder="Sderot"
                  required
                  onChange={this.onChangeHandler}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  name="category"
                  required
                  onChange={this.onChangeHandler}
                >
                  <option>Choose...</option>
                  <option>Flight</option>
                  <option>Vacation</option>
                  <option>Concert</option>
                  <option>Sport</option>
                  <option>Hotel</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridImage">
                <Form.Label>Image</Form.Label>
                <Form.Control name="image" type="file" required onChange={this.onChangeHandler} />
              </Form.Group>
            </Form.Row>

            <Form.Label>Add your Ticket</Form.Label>
            <Form.Control name="pdf" type="file" onChange={this.onChangeHandler} />
            {this.state.loading ? (
              <Button className="col-lg-12" variant="dark" disabled>
                Please wait... <Spinner animation="border" />
              </Button>
            ) : (
              <Button className="col-lg-12" variant="dark" type="submit">
                <h2 className="col-l">Add Post</h2>
                <span className="read-accept">*By clicking this button you accept the terms!</span>
              </Button>
            )}
          </Form>
        </div>
      </>
    );
  }
}

export default AddProduct;
