import React, { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        check: false,
    });

    const { email, password, check } = formValues;

    const handleChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);

        if (e.target.name === "check") {
            setFormValues({
                ...formValues,
                [e.target.name]: e.target.checked,
            });
        } else {
            setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
            });
        }
    };

    // useEffect(() => {
    //   console.log("Hey!");
    // });

    // --------------------------- montaje --------------------------

    useEffect(() => {
        console.log("Componente montado :)");
    }, []);

    // ------------------------- actualización ------------------------

    useEffect(() => {
        console.log("Email actualizado!");
    }, [email]);

    // ----------------------- Desmontaje -----------------------------

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <h3>Simple Form</h3>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                                name="check"
                                checked={check}
                                onChange={handleChange}
                            />
                            <label className="form-check-label">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>

                    {check && <Message />}
                </div>
            </div>
        </div>
    );
};

export default SimpleForm;