.form-group {
     position: relative;
     margin-bottom: 25px;  
     width: 100%;
    } 
    .form-input:hover{
        border-color: #0070c0;
    }
    label {
          position: absolute;

        font-size: 0px;
     } .form-input:focus + label { 
                    top: -21px;
                     left: 11px;
                      font-size: 12px; 
                      color: #f6f8fa;
                        border: 2px solid #0070c0 !important;
                       background-color: #0070c0; 
                    } 
.form-input {
  width: 100%;
  padding: 16px 12px;
  font-size: 16px;
  height: 48px;
  box-sizing: border-box;
    border: none;             
  background-color: #f0f0f0;

}
input:hover,
input:focus {
  border: 2px solid #0070c0 !important;
  outline: none; 
}
   <div className="col  form-group">
  <input
    onFocus={() => setFocusedInput('fullName')}
    onBlur={() => setFocusedInput(null)}
    type="text"
    name="fullName"
    className="form-input"
                  placeholder={"Full Name*"}

    required
  />
  <label>Full Name*</label>
</div>
