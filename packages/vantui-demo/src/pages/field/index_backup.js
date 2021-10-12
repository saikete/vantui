import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import Page from '../../common/page.js'

import VanConfigProvider from '../../dist/config-provider/index'
import VanShareSheet from '../../dist/share-sheet/index'
import VanCalendar from '../../dist/calendar/index'
import VanSkeleton from '../../dist/skeleton/index'
import VanDropdownItem from '../../dist/dropdown-item/index'
import VanDropdownMenu from '../../dist/dropdown-menu/index'
import VanGridItem from '../../dist/grid-item/index'
import VanGrid from '../../dist/grid/index'
import VanIndexAnchor from '../../dist/index-anchor/index'
import VanIndexBar from '../../dist/index-bar/index'
import VanCircle from '../../dist/circle/index'
import VanOverlay from '../../dist/overlay/index'
import VanPicker from '../../dist/picker/index'
import VanCollapseItem from '../../dist/collapse-item/index'
import VanCollapse from '../../dist/collapse/index'
import VanRate from '../../dist/rate/index'
import VanDatetimePicker from '../../dist/datetime-picker/index'
import VanTreeSelect from '../../dist/tree-select/index'
import VanTransition from '../../dist/transition/index'
import VanToast from '../../dist/toast/index'
import VanTag from '../../dist/tag/index'
import VanTabbarItem from '../../dist/tabbar-item/index'
import VanTabbar from '../../dist/tabbar/index'
import VanTabs from '../../dist/tabs/index'
import VanTab from '../../dist/tab/index'
import VanSwitch from '../../dist/switch/index'
import VanUploader from '../../dist/uploader/index'
import VanSwipeCell from '../../dist/swipe-cell/index'
import VanSubmitBar from '../../dist/submit-bar/index'
import VanSticky from '../../dist/sticky/index'
import VanSteps from '../../dist/steps/index'
import VanStepper from '../../dist/stepper/index'
import VanSlider from '../../dist/slider/index'
import VanSidebarItem from '../../dist/sidebar-item/index'
import VanSidebar from '../../dist/sidebar/index'
import VanSearch from '../../dist/search/index'
import VanRow from '../../dist/row/index'
import VanRadioGroup from '../../dist/radio-group/index'
import VanRadio from '../../dist/radio/index'
import VanProgress from '../../dist/progress/index'
import VanPopup from '../../dist/popup/index'
import VanPanel from '../../dist/panel/index'
import VanNotify from '../../dist/notify/index'
import VanNoticeBar from '../../dist/notice-bar/index'
import VanNavBar from '../../dist/nav-bar/index'
import VanLoading from '../../dist/loading/index'
import VanImage from '../../dist/image/index'
import VanIcon from '../../dist/icon/index'
import VanGoodsActionButton from '../../dist/goods-action-button/index'
import VanGoodsActionIcon from '../../dist/goods-action-icon/index'
import VanGoodsAction from '../../dist/goods-action/index'
import VanField from '../../dist/field/index'
import VanEmpty from '../../dist/empty/index'
import VanDivider from '../../dist/divider/index'
import VanDialog from '../../dist/dialog/index'
import VanCountDown from '../../dist/count-down/index'
import VanCol from '../../dist/col/index'
import VanCheckboxGroup from '../../dist/checkbox-group/index'
import VanCheckbox from '../../dist/checkbox/index'
import VanCellGroup from '../../dist/cell-group/index'
import VanCell from '../../dist/cell/index'
import VanCard from '../../dist/card/index'
import VanButton from '../../dist/button/index'
import VanArea from '../../dist/area/index'
import VanActionSheet from '../../dist/action-sheet/index'
import DemoBlock from '../../components/demo-block/index'
import './index.scss'

@withWeapp({
  data: {
    sms: '',
    value: '',
    password: '',
    username: '',
    username2: '',
    username3: '',
    message: '',
    phone: '1365577',
  },

  onClickIcon() {
    Taro.showToast({
      icon: 'none',
      title: '点击图标',
    })
  },
})
class _C extends React.Component {
  render() {
    const {
      value,
      username,
      password,
      username2,
      phone,
      username3,
      message,
      sms,
    } = this.data
    return (
      <Block>
        <DemoBlock title="基础用法">
          <VanCellGroup>
            <VanField
              value={value}
              placeholder="请输入用户名"
              border={false}
              clearable
            ></VanField>
          </VanCellGroup>
        </DemoBlock>
        <DemoBlock title="自定义类型">
          <VanCellGroup>
            <VanField
              value={username}
              label="用户名"
              placeholder="请输入用户名"
              clearable
              rightIcon="question-o"
              rightIconClass="custom-icon"
              required
              onClickIcon={this.onClickIcon}
            ></VanField>
            <VanField
              value={password}
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
              border={false}
            ></VanField>
          </VanCellGroup>
        </DemoBlock>
        <DemoBlock title="禁用输入框">
          <VanCellGroup>
            <VanField
              value="输入框已禁用"
              label="用户名"
              leftIcon="contact"
              disabled
              border={false}
            ></VanField>
          </VanCellGroup>
        </DemoBlock>
        <DemoBlock title="错误提示">
          <VanCellGroup>
            <VanField
              value={username2}
              label="用户名"
              placeholder="请输入用户名"
              error
            ></VanField>
            <VanField
              value={phone}
              label="手机号"
              placeholder="请输入手机号"
              errorMessage="手机号格式错误"
              border={false}
            ></VanField>
          </VanCellGroup>
        </DemoBlock>
        <DemoBlock title="内容对齐方式">
          <VanCellGroup>
            <VanField
              value={username3}
              label="用户名"
              placeholder="请输入用户名"
              inputAlign="right"
            ></VanField>
          </VanCellGroup>
        </DemoBlock>
        <DemoBlock title="高度自适应">
          <VanCellGroup>
            <VanField
              value={message}
              label="留言"
              type="textarea"
              placeholder="请输入留言"
              rows="1"
              autosize
              border={false}
            ></VanField>
          </VanCellGroup>
        </DemoBlock>
        <DemoBlock title="插入按钮">
          <VanCellGroup>
            <VanField
              value={sms}
              center
              clearable
              label="短信验证码"
              placeholder="请输入短信验证码"
              useButtonSlot
              border={false}
              renderButton={
                <Block>
                  <VanButton size="small" type="primary" customClass="button">
                    发送验证码
                  </VanButton>
                </Block>
              }
            ></VanField>
          </VanCellGroup>
        </DemoBlock>
      </Block>
    )
  }
}

export default _C