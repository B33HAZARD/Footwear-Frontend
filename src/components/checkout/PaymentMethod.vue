<template>
    <section class="billDetailsWrapper cartBlockPadding">
        <h2>Payment Method</h2>
        <form>
            <div class="billPaymentMethod d-flex">
                <input type="radio" id="directBankTransfer" name="paymentMethod" class="mb-2" checked />
                <label for="directBankTransfer" class="billMethodLabels">Direct Bank Transfer</label>
            </div>
            <div class="billPaymentMethod d-flex">
                <input type="radio" id="chequePay" name="paymentMethod" class="mb-2" />
                <label for="chequePay" class="billMethodLabels">Cheque Payment</label>
            </div>
            <div class="billPaymentMethod d-flex">
                <input type="radio" id="payPal" name="paymentMethod" class="mb-2" />
                <label for="payPal" class="billMethodLabels">Paypal</label>
            </div>
            <div class="billPaymentMethodTCs mb-0">
                <input type="checkbox" id="paymentMethodTCs" name="paymentMethodTCs" class="mt-2" />
                <label for="paymentMethodTCs" class="billMethodLabels billMethodTCs">I have read and accept the terms and conditions</label>
            </div>
        </form>
    </section>
</template>

<script>

export default {
    name: "PaymentMethod-component"
}

</script>

<style scoped>
@import "./checkout.css";
</style>