<template>
  <div class="form-container flex" :class="{ block: !!block }">
    <div class="form-left">
      <div class="form-title">
        <span :class="{ button: !!link }" @click="_ => openLink(link)">{{ title }}</span>
      </div>
      <div class="form-description">{{ description }}</div>
    </div>
    <div class="form-right">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="form-item"
        :class="{ specialty: !!item.specialty }"
      >{{ item.text }}</div>
      <div v-if="stacks.length" class="form-item">
        <a-tag v-for="(text, i) in stacks" :key="i">{{ text }}</a-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueForm',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: _ => []
    },
    link: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    stacks: {
      type: Array,
      default: _ => []
    }
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  margin-bottom: 32px;

  .form-left {
    flex: 2;
    @media screen and (max-width: $md) {
      flex: 1;
    }
    .form-title {
      font-size: 32px;
      @media screen and (max-width: $md) {
        font-size: 27px;
      }
    }
    .form-description {
      opacity: 0.5;
      font-size: 20px;
      @media screen and (max-width: $md) {
        font-size: 18px;
      }
    }
  }
  .form-right {
    flex: 3;
    @media screen and (max-width: $md) {
      flex: 1;
      padding-top: 7px;
    }
    .form-item {
      font-size: 28px;
      @media screen and (max-width: $md) {
        font-size: 20px;
      }
    }
    .specialty {
      font-weight: 500;
      color: #ff9b3d;
    }
  }

  &.block {
    @media screen and (max-width: $md) {
      display: block !important;
    }
  }
}
</style>