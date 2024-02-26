<script setup lang="ts"></script>

<template>
  <div class="h-screen bg-red-300"></div>
  <div class="py-24">
    <div class="max-w-[300px] mx-auto">
      <a-form autocomplete="off">
        <a-form-item label="Username" name="username">
          <a-input>
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="Password" name="password">
          <a-input-password>
            <template #prefix>
              <lock-outlined />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-flex gap="middle" justify="space-between">
            <a-form-item name="remember" no-style>
              <a-checkbox>Remember me</a-checkbox>
            </a-form-item>
            <a class="login-form-forgot" href="">Forgot password</a>
          </a-flex>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" class="w-full mb-1"> Log in </a-button>
          Or
          <a href="">register now!</a>
        </a-form-item>
      </a-form>
    </div>
  </div>
  <div class="h-screen bg-red-800"></div>
</template>

<style scoped></style>
