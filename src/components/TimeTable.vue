<!--
 * @Description: 
 * @Author: LHF
 * @Date: 2020-12-11 08:25:54
 * @LastEditTime: 2020-12-29 16:15:51
-->
<template>
  <div>
    <Table border :columns="columns12" :data="data6">
      <template slot-scope="{ row }" slot="clock">
        <strong>{{ row.clock }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button
          type="primary"
          size="small"
          style="margin-right: 5px"
          @click="show(index)"
          >View</Button
        >
        <Button type="error" size="small" @click="remove(index)">Delete</Button>
      </template>
    </Table>
  </div>
</template>
<script>
export default {
  name: "timeTable",
  data() {
    return {
      columns12: [
        {
          title: "时间",
          slot: "clock",
        },
        {
          title: "Monday",
          key: "Mon",
        },
        {
          title: "Tuesday",
          key: "Tue",
        },
        {
          title: "Wednesday",
          key: "Wed",
        },
        {
          title: "Thursday",
          key: "Thu",
        },
        {
          title: "Friday",
          key: "Fri",
        },
      ],
      data6: [
        {
          clock: "8:00-9:00",
          Mon: "",
          Tue: "",
          Wed: "",
          Thu: "",
          Fri: "",
        },
        {
          clock: "9:00-10:00",
          Mon: "",
          Mon: "",
          Tue: "",
          Wed: "",
          Thu: "",
          Fri: "",
        },
        {
          clock: "10:00-11:00",
          Mon: "",
          Mon: "",
          Tue: "",
          Wed: "",
          Thu: "",
          Fri: "",
        },
        {
          clock: "14:00-15:00",
          Mon: "",
          Mon: "",
          Tue: "",
          Wed: "",
          Thu: "",
          Fri: "",
        },
        {
          clock: "15:00-16:00",
          Mon: "",
          Mon: "",
          Tue: "",
          Wed: "",
          Thu: "",
          Fri: "",
        },
        {
          clock: "16:00-17:00",
          Mon: "",
          Mon: "",
          Tue: "",
          Wed: "",
          Thu: "",
          Fri: "",
        },
      ],
    };
  },
};
</script>
<style>
</style>