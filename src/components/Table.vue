<template>
  <div class="list">
    <div>
      <Table border :columns="columns12" :data="tabledata">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="primary"
            size="small"
            style="margin-right: 5px"
            @click="show(index)"
            >View</Button
          >
          <Button type="error" size="small" @click="remove(index)"
            >Delete</Button
          >
        </template>
      </Table>
    </div>
    <div class="page-wrap">
      <Page :total="total" show-elevator @on-change="changePage" />
    </div>
  </div>
</template>

<script src="./table.ts">
</script>
<style>
.page-wrap{
  margin: 20px auto;
}
</style>