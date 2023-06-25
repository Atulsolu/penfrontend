import React from 'react'
import '../Styles/Signup.css';

export default function Signup() {
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-20 col-md-15 col-lg-12 col-xl-8">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                    <form>

                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1cg">First Name</label>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1cg">Last Name</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example3cg">Email</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example4cg">Password</label>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="date" id="dob" class="form-control form-control-lg" />
                        <label class="form-label" for="dob">DOB</label>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="date" id="doj" class="form-control form-control-lg" />
                        <label class="form-label" for="doj">DOJ</label>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="date" id="dor" class="form-control form-control-lg" />
                        <label class="form-label" for="dor">Retirement Date</label>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="number" id="formSalary" class="form-control form-control-lg" />
                        <label class="form-label" for="formSalary">Salary</label>
                      </div>
                      <div class="form-outline mb-4">
                        <select id="formGender" class="form-select form-select-lg">
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                        <label class="form-label" for="formGender">Gender</label>
                      </div>
                      <div class="d-flex justify-content-center">
                        <button type="button"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                        class="fw-bold text-body"><u>Login here</u></a></p>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
