import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // console.log(watch());

  // console.log(errors.name)

  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">
            Great Vibes Private Ltd
          </h1>
          <p1>Assesment-1</p1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">Name:</label>
              <input
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>

            <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Phone:</label>
              <input
                type="text"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", {
                  pattern: {
                    value:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: "Invalid phone no",
                  },
                })}
                onKeyUp={() => {
                  trigger("phone");
                }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Message:</label>
              <textarea
                className={`form-control ${errors.message && "invalid"}`}
                {...register("message")}
                onKeyUp={() => {
                  trigger("message");
                }}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Country:</label>
              <input
                type="text"
                className={`form-control ${errors.country && "invalid"}`}
                {...register("country")}
                onKeyUp={() => {
                  trigger("country");
                }}
              />
              {errors.country && (
                <small className="text-danger">{errors.country.message}</small>
              )}
            </div>

            <div className="form-group">
              <label className="col-form-label">state:</label>
              <input
                type="text"
                className={`form-control ${errors.state && "invalid"}`}
                {...register("state")}
                onKeyUp={() => {
                  trigger("state");
                }}
              />
              {errors.city && (
                <small className="text-danger">{errors.state.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">City:</label>
              <input
                type="text"
                className={`form-control ${errors.city && "invalid"}`}
                {...register("city")}
                onKeyUp={() => {
                  trigger("city");
                }}
              />
              {errors.city && (
                <small className="text-danger">{errors.city.message}</small>
              )}
            </div>

            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Send message"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
