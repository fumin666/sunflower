<template>
  <div>
    <s-table
      v-loading="loading"
      :data="tableData"
      :element-loading-text="loadingText"
    >
      <slot></slot>
    </s-table>
    <s-pagination
      :noBorder="noBorder"
      :total="total"
      :current-page="currentPage"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      infinite
      :hasNext="hasNext"
    >
    </s-pagination>
  </div>
</template>

<script>
  import axios from 'axios';
  import {sTable, sTableColumn} from '../table';
  import sPagination from '../pagination';

  const pageNumShow = 6;

  function mockArr(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr.push({});
    }
    return arr;
  }

  export default {
    name: 'sPageInfinite',
    data() {
      return {
        currentPage: 1,
        innerPageSize: 10,
        hasNext: true,
        totalData: [],
        total: 0,
        offsetPage: 0,
        loading: false
      };
    },
    props: {
      noBorder: {
        type: Boolean,
        default: false
      },
      pageSize: {
        type: Number,
        default: 10
      },
      pageSizes: {
        type: Array,
        default: function() {
          return [10, 20, 50, 100];
        }
      },
      loadingText: {
        type: String,
        default: ''
      },
      ajaxObj: {
        type: Object,
        required: true,
        default: function() {
          return {
            type: 'get',
            url: '/infinitePagination',
            params: {}
          };
        }
      }
    },
    computed: {
      tableData: function() {
        let page = (this.currentPage - this.offsetPage) >= 0 ? (this.currentPage - this.offsetPage) : 0;
        let list = this.totalData.slice((page - 1) * this.innerPageSize, page * this.innerPageSize);
        if (list.length < this.innerPageSize) {
          if (list.length !== 0) {
            this.getData('append');
          } else {
            this.getData('replace');
            // 显示假数据来占据空间，不让表格塌下去
            return mockArr(this.innerPageSize);
          }
        }
        return list;
      },
      ajaxParams: function() {
        return {
          'condition': {},
          'currentPage': this.currentPage,
          'totalCount': this.total === 0 ? -1 : (this.total + 1),
          'pageSize': this.innerPageSize,
          'pageList': this.totalData,
          'distinct': false,
          'orderByClause': ''
        };
      }
    },
    watch: {
      pageSize: {
        immediate: true,
        handler(value) {
          this.innerPageSize = value;
        }
      },
      ajaxObj: {
        immediate: true,
        deep: true,
        handler() {
          this.currentPage = 1;
          this.total = 0;
          this.totalData.length = 0;
        }
      }
    },
    methods: {
      handleSizeChange(val) {
        this.innerPageSize = val;
        this.currentPage = 1;
        this.total = 0;
        this.totalData.length = 0;
      },
      handleCurrentChange(val) {
        this.currentPage = val;
      },
      getData(flag) {
        let params = Object.assign(this.ajaxParams, this.ajaxObj.params);
        this.loading = true;
        axios[this.ajaxObj.type](this.ajaxObj.url, {params: params}).then(response => {
          this.loading = false;
          let {code, data} = response.data;
          if (code === 200) {
            this.hasNext = true;
            if (this.total <= this.currentPage * this.innerPageSize) {
              this.total += data.length;
            } else {
              this.total -= this.totalData.length;
            }
            console.log('返回的数据长度:' + data.length);
            if (flag === 'append') {
              this.totalData = this.totalData.concat(data);
            } else {
              this.offsetPage = Math.floor((this.currentPage - 1) / pageNumShow) * pageNumShow;
              this.totalData = data;
            }
          } else {
            this.hasNext = false;
          }
        });
      }
    },
    components: {
      sTable,
      sTableColumn,
      sPagination
    }

  }
</script>