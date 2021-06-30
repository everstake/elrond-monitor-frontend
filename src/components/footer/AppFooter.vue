<template>
  <div class="footer">
    <div class="footer__content">
      <h2 class="footer__copyright">
        Copyright © 2021. All Rights Reserved
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
.footer {
  background-color: #22262a;
  height: 80px;
  padding: 10px;

  &__content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  &__links {
    list-style: none;
  }

  &__link,
  &__copyright {
    color: #fff;
  }
}
</style>