<template>
  <div>
    <slot></slot>
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <slot></slot>
  </div>

</template>

<script>
    export default {
        name: "contentHeader"
    }
</script>

<style scoped>

</style>
