/**
* Created by alex on 2018/1/3.
 */

<template>
    <div>
        <h3>改造collapse为角色权限展示定制,其他地方请勿使用（依据业务并不通用）</h3>
        <h5>等待后台对接，选择功能暂不可用</h5>
        <br>
        <br>
        <br>
        <br>
        <br>
        <s-button @click="centerDialog = true">请开始你的表演</s-button>

        <s-dialog
                title="权限害人"
                v-model="centerDialog"
                width="700px"
                center>
            <s-scrollbar wrap-style="height: 400px;">
                <s-role-collapse :title="'超级管理员'">
                    <s-role-collapse-item v-for="(item,index) in menuInitList" :key="index" :name="index+1" :role-list="item"></s-role-collapse-item>
                </s-role-collapse>
            </s-scrollbar>
        </s-dialog>
    </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        centerDialog: false,
        activeNames: ['1'],
        menuInitList: [
          {
            "menuId": 3,
            "uuid": "f10adc3949ba59abbe56e057f20f88a6",
            "resUrl": "/",
            "menuName": "资产管理",
            "menuLevel": 1,
            "menuSeq": 2,
            "menuParentUuid": "thetopuuid0000000000000000000000",
            "createTime": 0,
            "status": 1,
            "keyWord": "assetsManage",
            "menuDesc": null,
            "keyName": "assetsManage",
            "product": "BASE",
            "childMenu": [
              {
                "menuId": 33,
                "uuid": "f10adc3949ba69abbe56e057f20f8836",
                "resUrl": "/",
                "menuName": "资产统计资产统计资产统计资产统计资产统计资产统计资产统计资产统计资产统计资产统计",
                "menuLevel": 2,
                "menuSeq": 1,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a6",
                "createTime": 0,
                "status": 1,
                "keyWord": "assetsManage_assetStatistics",
                "menuDesc": null,
                "keyName": null,
                "product": "BASE",
                "childMenu": []
              },
              {
                "menuId": 35,
                "uuid": "f10adc3949ba69abbe56e057f20f8838",
                "resUrl": "/",
                "menuName": "拓扑视图拓扑视图拓扑视图拓扑视图拓扑视图拓扑视图拓扑视图拓扑视图拓扑视图拓扑视图",
                "menuLevel": 2,
                "menuSeq": 2,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a6",
                "createTime": 0,
                "status": 1,
                "keyWord": "assetsManage_topologyView",
                "menuDesc": null,
                "keyName": null,
                "product": "BASE",
                "childMenu": [
                  {
                    "menuId": 53,
                    "uuid": "f10adc3949ba69abbe56e057f20f8856",
                    "resUrl": "/",
                    "menuName": "拓扑视图-1拓扑视图-1拓扑视图-1拓扑视图-1拓扑视图-1拓扑视图-1拓扑视图-1拓扑视图-1",
                    "menuLevel": 2,
                    "menuSeq": 11,
                    "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a6",
                    "createTime": 0,
                    "status": 1,
                    "keyWord": "assetsManage_rchangesAssets",
                    "menuDesc": null,
                    "keyName": null,
                    "product": "BASE",
                    "childMenu": []
                  },
                  {
                    "menuId": 53,
                    "uuid": "f10adc3949ba69abbe56e057f20f8856",
                    "resUrl": "/",
                    "menuName": "拓扑视图-2",
                    "menuLevel": 2,
                    "menuSeq": 11,
                    "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a6",
                    "createTime": 0,
                    "status": 1,
                    "keyWord": "assetsManage_rchangesAssets",
                    "menuDesc": null,
                    "keyName": null,
                    "product": "BASE",
                    "childMenu": [
                      {
                        "menuId": 53,
                        "uuid": "f10adc3949ba69abbe56e057f20f8856",
                        "resUrl": "/",
                        "menuName": "拓扑视图-2-1",
                        "menuLevel": 2,
                        "menuSeq": 11,
                        "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a6",
                        "createTime": 0,
                        "status": 1,
                        "keyWord": "assetsManage_rchangesAssets",
                        "menuDesc": null,
                        "keyName": null,
                        "product": "BASE",
                        "childMenu": []
                      },
                      {
                        "menuId": 53,
                        "uuid": "f10adc3949ba69abbe56e057f20f8856",
                        "resUrl": "/",
                        "menuName": "拓扑视图-2-2",
                        "menuLevel": 2,
                        "menuSeq": 11,
                        "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a6",
                        "createTime": 0,
                        "status": 1,
                        "keyWord": "assetsManage_rchangesAssets",
                        "menuDesc": null,
                        "keyName": null,
                        "product": "BASE",
                        "childMenu": []
                      },
                    ]
                  },
                ]
              },
              {
                "menuId": 53,
                "uuid": "f10adc3949ba69abbe56e057f20f8856",
                "resUrl": "/",
                "menuName": "最近资产变化状况",
                "menuLevel": 2,
                "menuSeq": 11,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a6",
                "createTime": 0,
                "status": 1,
                "keyWord": "assetsManage_rchangesAssets",
                "menuDesc": null,
                "keyName": null,
                "product": "BASE",
                "childMenu": []
              },
              {
                "menuId": 55,
                "uuid": "f10adc3949ba69abbe56e057f20f8858",
                "resUrl": "/",
                "menuName": "资产过期统计",
                "menuLevel": 2,
                "menuSeq": 12,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a6",
                "createTime": 0,
                "status": 1,
                "keyWord": "assetsManage_assetExpirationStatistics  ",
                "menuDesc": null,
                "keyName": null,
                "product": "BASE",
                "childMenu": [
                  {
                    "menuId": 53,
                    "uuid": "f10adc3949ba69abbe56e057f20f8856",
                    "resUrl": "/",
                    "menuName": "拓扑视图-1",
                    "menuLevel": 2,
                    "menuSeq": 11,
                    "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a6",
                    "createTime": 0,
                    "status": 1,
                    "keyWord": "assetsManage_rchangesAssets",
                    "menuDesc": null,
                    "keyName": null,
                    "product": "BASE",
                    "childMenu": []
                  },
                ]
              }
            ]
          },
          {
            "menuId": 5,
            "uuid": "f10adc3949ba59abbe56e057f20f88a8",
            "resUrl": "/",
            "menuName": "资产监控",
            "menuLevel": 1,
            "menuSeq": 3,
            "menuParentUuid": "thetopuuid0000000000000000000000",
            "createTime": 0,
            "status": 1,
            "keyWord": "assetsMonitor",
            "menuDesc": null,
            "keyName": "assetsMonitor",
            "product": "IMP",
            "childMenu": [
              {
                "menuId": 57,
                "uuid": "f10adc3949ba69abbe56e057f20f8860",
                "resUrl": "/",
                "menuName": "资产监控统计",
                "menuLevel": 2,
                "menuSeq": 1,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a8",
                "createTime": 0,
                "status": 1,
                "keyWord": "ssetsMonitor_assetMonitoringCount",
                "menuDesc": null,
                "keyName": null,
                "product": "IMP",
                "childMenu": []
              },
              {
                "menuId": 59,
                "uuid": "f10adc3949ba69abbe56e057f20f8862",
                "resUrl": "/",
                "menuName": "拓扑视图",
                "menuLevel": 2,
                "menuSeq": 2,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a8",
                "createTime": 0,
                "status": 1,
                "keyWord": "assetsMonitor_topologyView",
                "menuDesc": null,
                "keyName": null,
                "product": "IMP",
                "childMenu": []
              },
              {
                "menuId": 75,
                "uuid": "f10adc3949ba69abbe56e057f20f8878",
                "resUrl": "/",
                "menuName": "关注监控资产",
                "menuLevel": 2,
                "menuSeq": 10,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a8",
                "createTime": 0,
                "status": 1,
                "keyWord": "assetsMonitor_focusAssets",
                "menuDesc": null,
                "keyName": null,
                "product": "IMP",
                "childMenu": []
              },
              {
                "menuId": 77,
                "uuid": "f10adc3949ba69abbe56e057f20f8880",
                "resUrl": "/",
                "menuName": "资产监控排行TOP 10",
                "menuLevel": 2,
                "menuSeq": 11,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f88a8",
                "createTime": 0,
                "status": 1,
                "keyWord": "assetsMonitor_assetTop10",
                "menuDesc": null,
                "keyName": null,
                "product": "IMP",
                "childMenu": []
              }
            ]
          },
          {
            "menuId": 11,
            "uuid": "f10adc3949ba59abbe56e057f20f8814",
            "resUrl": "/",
            "menuName": "运维中心",
            "menuLevel": 1,
            "menuSeq": 4,
            "menuParentUuid": "thetopuuid0000000000000000000000",
            "createTime": 0,
            "status": 1,
            "keyWord": "operationCenter",
            "menuDesc": "operationCenter（运维人员）operationConfig(安全管理员)",
            "keyName": "operationCenter",
            "product": "OMA",
            "childMenu": [
              {
                "menuId": 121,
                "uuid": "f10adc3949ba69abbe56e057f20f8124",
                "resUrl": "/",
                "menuName": "运维设备",
                "menuLevel": 2,
                "menuSeq": 1,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "oper_equipment",
                "menuDesc": null,
                "keyName": "operEquipment",
                "product": "OMA",
                "childMenu": []
              },
              {
                "menuId": 123,
                "uuid": "f10adc3949ba69abbe56e057f20f8126",
                "resUrl": "/",
                "menuName": "自定义脚本设置",
                "menuLevel": 2,
                "menuSeq": 2,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "oper_customset",
                "menuDesc": null,
                "keyName": "operCustomset",
                "product": "OMA",
                "childMenu": []
              },
              {
                "menuId": 125,
                "uuid": "f10adc3949ba69abbe56e057f20f8128",
                "resUrl": "/",
                "menuName": "特殊运维",
                "menuLevel": 2,
                "menuSeq": 3,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "oper_special",
                "menuDesc": null,
                "keyName": "operSpecial",
                "product": "OMA",
                "childMenu": []
              },
              {
                "menuId": 127,
                "uuid": "f10adc3949ba69abbe56e057f20f8130",
                "resUrl": "/",
                "menuName": "批量执行",
                "menuLevel": 2,
                "menuSeq": 4,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "oper_batch",
                "menuDesc": null,
                "keyName": "operBatch",
                "product": "OMA",
                "childMenu": []
              },
              {
                "menuId": 129,
                "uuid": "f10adc3949ba69abbe56e057f20f8132",
                "resUrl": "/",
                "menuName": "命令复核",
                "menuLevel": 2,
                "menuSeq": 5,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "oper_command",
                "menuDesc": null,
                "keyName": "operCommand",
                "product": "OMA",
                "childMenu": []
              },
              {
                "menuId": 131,
                "uuid": "f10adc3949ba69abbe56e057f20f8134",
                "resUrl": "/",
                "menuName": "密码会同",
                "menuLevel": 2,
                "menuSeq": 6,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "oper_pass",
                "menuDesc": null,
                "keyName": "operPass",
                "product": "OMA",
                "childMenu": []
              },
              {
                "menuId": 133,
                "uuid": "f10adc3949ba69abbe56e057f20f8136",
                "resUrl": "/",
                "menuName": "邀请协助",
                "menuLevel": 2,
                "menuSeq": 7,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "oper_assist",
                "menuDesc": null,
                "keyName": "operAssist",
                "product": "OMA",
                "childMenu": []
              },
              {
                "menuId": 137,
                "uuid": "f10adc3949ba69abbe56e057f20f8140",
                "resUrl": "/",
                "menuName": "运维申请",
                "menuLevel": 2,
                "menuSeq": 9,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "operationCenter_operationApplications",
                "menuDesc": null,
                "keyName": null,
                "product": "OMA",
                "childMenu": []
              },
              {
                "menuId": 139,
                "uuid": "f10adc3949ba69abbe56e057f20f8142",
                "resUrl": "/",
                "menuName": "客户端下载",
                "menuLevel": 2,
                "menuSeq": 10,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "operationCenter_clientDownloads",
                "menuDesc": null,
                "keyName": null,
                "product": "OMA",
                "childMenu": []
              },
              {
                "menuId": 141,
                "uuid": "f10adc3949ba69abbe56e057f20f8144",
                "resUrl": "/",
                "menuName": "最新事件",
                "menuLevel": 2,
                "menuSeq": 11,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "operationCenter_latestEvents",
                "menuDesc": null,
                "keyName": null,
                "product": "OMA",
                "childMenu": []
              },
              {
                "menuId": 143,
                "uuid": "f10adc3949ba69abbe56e057f20f8146",
                "resUrl": "/",
                "menuName": "本周审核情况统计",
                "menuLevel": 2,
                "menuSeq": 12,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "oper_auditstatistic",
                "menuDesc": null,
                "keyName": "operAuditstatistic",
                "product": "OMA",
                "childMenu": []
              },
              {
                "menuId": 145,
                "uuid": "f10adc3949ba69abbe56e057f20f8148",
                "resUrl": "/",
                "menuName": "本周运维量统计",
                "menuLevel": 2,
                "menuSeq": 13,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "oper_statistic",
                "menuDesc": null,
                "keyName": "operNumStatistic",
                "product": "OMA",
                "childMenu": []
              },
              {
                "menuId": 147,
                "uuid": "f10adc3949ba69abbe56e057f20f8150",
                "resUrl": "/",
                "menuName": "运维日志",
                "menuLevel": 2,
                "menuSeq": 14,
                "menuParentUuid": "f10adc3949ba59abbe56e057f20f8814",
                "createTime": 0,
                "status": 1,
                "keyWord": "oper_log",
                "menuDesc": null,
                "keyName": "operLog",
                "product": "OMA",
                "childMenu": []
              }
            ]
          }
        ]
      };
    }
  }
</script>
