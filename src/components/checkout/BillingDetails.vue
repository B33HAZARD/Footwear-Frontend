<template>
    <section class="billDetailsWrapper">
        <h2>Billing Details</h2>
        <form class="pb-5">
            <div class="billFormGroup">
                <label for="billCountry" class="billFormLabels" >select country</label>
                <select id="billCountry" placeholder="Select country" class="billFormControls">
                    <option>Select country</option>
                    <option>Pakistan</option>
                    <option>China</option>
                    <option>Turkey</option>
                    <option>United Arab Emirates</option>
                    <option>United State</option>
                </select>
            </div>
            <div class="billFormGroup">
                <div class="row g-0 justify-content-center align-items-center">
                    <div class="col-6 pe-2">
                        <label for="billFName" class="billFormLabels">first name</label>
                        <input id="billFName" class="billFormControls" type="text" placeholder="First Name" name="firstName" />
                    </div>
                    <div class="col-6 ps-2">
                        <label for="billLName" class="billFormLabels">Last name</label>
                        <input id="billLName" class="billFormControls" type="text" placeholder="Last Name" name="lastName" />
                    </div>
                </div>
            </div>
            <div class="billFormGroup">
                <label for="billCompnayName" class="billFormLabels">compnay name</label>
                <input type="text" name="companyName" id="billCompanyName" class="billFormControls" placeholder="Company Name" />
            </div>
            <div class="billFormGroup">
                <label for="billAddress" class="billFormLabels">address</label>
                <input type="text" name="billingAddress" id="billAddress" class="billFormControls" placeholder="Enter Your Address" />
            </div>
            <div class="billFormGroup">
                <input type="text" name="billingAddress" class="billFormControls" placeholder="Second Address" />
            </div>
            <div class="billFormGroup">
                <label for="billCity" class="billFormLabels">town/city</label>
                <input type="text" name="billCity" id="billCity" class="billFormControls" placeholder="Town or City" />
            </div>
            <div class="billFormGroup">
                <div class="row g-0 justify-content-center align-items-center">
                    <div class="col-6 pe-2">
                        <label for="billState" class="billFormLabels">state/province</label>
                        <input id="billState" class="billFormControls" type="text" placeholder="State/Province" name="billState" />
                    </div>
                    <div class="col-6 ps-2">
                        <label for="billZip" class="billFormLabels">zip/postal code</label>
                        <input id="billZip" class="billFormControls" type="text" placeholder="Zip / Postal" name="billZip" pattern="[0-9]*" />
                    </div>
                </div>
            </div>
            <div class="billFormGroup">
                <div class="row g-0 justify-content-center align-items-center">
                    <div class="col-6 pe-2">
                        <label for="billEmail" class="billFormLabels">email address</label>
                        <input id="billEmail" class="billFormControls" type="email" placeholder="Email Address" name="billEmail" />
                    </div>
                    <div class="col-6 ps-2">
                        <label for="billPhone" class="billFormLabels">phone number</label>
                        <input id="billPhone" class="billFormControls" type="tel" placeholder="Phone Number" name="billPhone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>


<script>

export default {
    name: "BillingDetails-component"
}
</script>


<style scoped>
@import './checkout.css'
</style>