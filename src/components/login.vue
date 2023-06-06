<template>
  <div class="login">
    <div class="shadow p-3">
      <p class="text-muted">Please enter your account details</p>
      <form action="" class="form">
        <div class="d-flex flex-column">
          <label for="mail"> Username/Email </label>
          <input type="text" id="mail"/>
          <label for="pass" class="mt-2"> password </label>
          <input type="password" id="pass"/>
          <a href="" class="text-end m-2">Forgot password?</a>
        </div>
        <input type="submit" class="btn-purple w-100 bottom-0" value="Login" />
      </form>
    </div>
  </div>
</template>

<script>
import { provide } from 'vue';
export default {
  name: "LoginComp",
  setup() {
    return {
    };
  },
};
</script>

<style scoped>
.form {
  height: 200px;
  position: relative;
}
input {
  border: none;
  border-bottom: solid gray 1px;
}
.login {
  position: absolute;
  background: white;
  top: 80px;
  right: 15px;
  z-index: 70;
}
</style>
