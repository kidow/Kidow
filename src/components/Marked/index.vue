<template>
  <div class="marked" v-html="html" ref="marked" />
</template>

<script>
let Prism
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  Prism = require('prismjs')
  require('prismjs/components/prism-json.min.js')
  require('prismjs/components/prism-nginx.min.js')
  require('prismjs/components/prism-bash.min.js')
  require('prismjs/components/prism-javascript.min.js')
  require('prismjs/components/prism-typescript.min.js')
  require('prismjs/components/prism-jsx.min.js')
  require('prismjs/components/prism-css.min.js')
  require('prismjs/components/prism-markdown.min.js')
  require('prismjs/components/prism-scss.min.js')
  require('prismjs/components/prism-sql.min.js')
  require('prismjs/components/prism-tsx.min.js')
  require('prismjs/components/prism-yaml.min.js')
  require('prismjs/components/prism-docker.min.js')
  require('prismjs/components/prism-git.min.js')
  require('prismjs/components/prism-graphql.min.js')
  require('prismjs/components/prism-groovy.min.js')
}
import 'prismjs/themes/prism-tomorrow.css'
import marked from 'marked'
export default {
  name: 'VueMarked',
  data() {
    return {
      html: ''
    }
  },
  mounted() {
    Prism.highlightAll()
    this.html = this.markdown
      ? marked(this.markdown, { break: true, sanitize: true })
      : ''
    this.$nextTick(_ => {
      Prism.highlightAll()
    })
  },
  props: {
    markdown: {
      type: String,
      default: ''
    }
  },
  watch: {
    markdown() {
      this.renderMarkdown()
      Prism.highlightAll()
    }
  },
  methods: {
    renderMarkdown() {
      if (!this.markdown) return (this.html = '')
      this.html = marked(this.markdown, {
        breaks: true,
        sanitize: true
      })
    }
  }
}
</script>

<style lang="scss">
@mixin Code {
  font-family: 'D2 Coding';
  background: #f3f3f3;
  padding: 0.25rem;
  color: $brand-color;
  border: 1px solid $oc-gray-0;
  border-radius: 2px;
}

.marked {
  font-size: 18px;
  margin-bottom: 75px;
  blockquote {
    border-left: 4px solid $brand-color;
    padding-left: 1rem;
    margin-left: 0;
    margin-right: 0;
    display: flex;
    align-items: center;
  }
  p {
    margin: 27px 0 15px;
    word-break: keep-all;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: 500;
    margin: 48px 0 24px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    color: $font-primary-color;
    code {
      @include Code;
    }
  }
  code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'D2 Coding';
  }
  li {
    code {
      @include Code;
    }
  }
  a {
    color: $brand-color;
    &:hover {
      color: $oc-orange-5;
      text-decoration: underline;
    }
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  table,
  th,
  td {
    border: 1px solid $oc-gray-4;
  }
  th,
  td {
    font-size: 0.9rem;
    padding: 0.25rem;
    text-align: left;
  }
  img {
    width: 80%;
    margin: 3.5rem auto;
    display: block;
    @media screen and (max-width: $md) {
      width: 100%;
      margin: 1.5rem auto;
    }
  }
}
</style>
