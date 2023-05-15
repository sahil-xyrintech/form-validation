<template>
  <form action="" @submit.prevent="submitForm">
    <div
      class="p-6 m-auto space-y-4 border shadow-sm w-96 rounded-2xl bg-sky-100"
    >
      <InputText
        name="User Name"
        label="User Name"
        v-model="formData.userName"
        :errors="v$.userName.$errors"
      />
      <InputText
        name="User Email"
        label="User Email"
        v-model="formData.userEmail"
        :errors="v$.userEmail.$errors"
      />
      <InputText
        name="Password"
        label="Password"
        v-model="formData.password"
        :errors="v$.password.$errors"
      />
      <InputText
        name="Phone Number"
        label="Phone Number"
        v-model="formData.phoneNumber"
        :errors="v$.phoneNumber.$errors"
      />
      {{ formData }}
      <button
        type="submit"
        class="px-3 py-2 mt-6 font-semibold text-white rounded-md bg-sky-600"
      >
        Submit
      </button>
    </div>
  </form>
</template>
<script setup>
import InputText from "./InputText.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, numeric } from "@vuelidate/validators";
import { reactive } from "vue";
const formData = reactive({
  userName: "",
  userEmail: "",
  password: "",
  phoneNumber: "",
});
const rules = reactive({
  userName: { required },
  userEmail: { required, email },
  password: { required },
  phoneNumber: { numeric },
});
const v$ = useVuelidate(rules, formData);
const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    alert(JSON.stringify(formData));
  } else {
    alert("Failed");
  }
};
</script>
