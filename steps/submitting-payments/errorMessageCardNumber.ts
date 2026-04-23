import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

When("user enters {string} in the card number field", async function (string) {
    await reviewPaymentPage.cardNumberInput.fill(string);
});

When("user clicks on Terms and Conditions checkbox", async function () {
  await reviewPaymentPage.termsAndConditionsCheckbox.check();
});

Then("an error message {string} should be displayed", async function (string) {
    await expect(reviewPaymentPage.cardNumberErrorMessage).toHaveText(string);
});