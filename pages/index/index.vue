<template>
	<view class="container">
		<!-- 维保服务 Banner -->
		<swiper class="banner-swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500"
			indicator-color="#cccccc" indicator-active-color="#4A90E2">
			<!-- Swiper Item 1 -->
			<swiper-item>
				<view class="section-banner">
					<!-- 使用 :src 绑定图片路径 -->
					<image class="banner-bg" src="/static/images/bg.png" mode="aspectFill"></image>
					<view class="banner-content">
						<!-- 文本内容使用 {{ }} 绑定 -->
						<text class="banner-title">维保服务</text>
						<view class="divider"></view>
						<text class="banner-desc">维保机构执行日常维保任务和故障工单，满足日常维保工作</text>
					</view>
				</view>
			</swiper-item>

			<!-- Swiper Item 2 -->
			<swiper-item>
				<view class="section-banner">
					<!-- 使用 :src 绑定图片路径 -->
					<image class="banner-bg" src="/static/images/bg2.png" mode="aspectFill"></image>
					<view class="banner-content">
						<!-- 文本内容使用 {{ }} 绑定 -->
						<text class="banner-title">维保服务</text>
						<view class="divider"></view>
						<text class="banner-desc">维保机构执行日常维保任务和故障工单，满足日常维保工作</text>
					</view>
				</view>
			</swiper-item>
		</swiper>


		<!-- 功能模块区域 -->
		<view class="modules">
			<!-- 消防维保模块 -->
			<view class="module-card">
				<view class="module-title-wrapper">
					<text class="module-title">消防维保</text>
					<view class="title-underline"></view>
				</view>
				<view class="module-items">
					<!-- 使用 @click 绑定事件，直接传递路径参数 -->
					<view class="module-item" @click="goToPage('/pages/weibaoService/weibaoService')">
						<!-- 使用 :src 绑定图片路径 -->
						<image class="item-icon" src="/static/images/icon_weibao_service.png" mode="aspectFit"></image>
						<text class="item-text">维保服务</text>
					</view>
					<!-- 使用 @click 绑定事件，直接传递路径参数 -->
					<view class="module-item" @click="goToPage('/pages/weibaoLaoban/weibaoLaoban')">
						<!-- 使用 :src 绑定图片路径 -->
						<image class="item-icon" src="/static/images/icon_weibao_laoban.png" mode="aspectFit"></image>
						<text class="item-text">维保老板</text>
					</view>
				</view>
			</view>

			<!-- 消防智+模块 -->
			<view class="module-card module-card--right">
				<view class="module-title-wrapper">
					<text class="module-title">消防智+</text>
					<view class="title-underline"></view>
				</view>
				<view class="module-items">
					<!-- 使用 @click 绑定事件，直接传递路径参数 -->
					<view class="module-item" @click="goToPage('/pages/xiaofangGuanli/xiaofangGuanli')">
						<!-- 使用 :src 绑定图片路径 -->
						<image class="item-icon" src="/static/images/icon_xiaofang_guanli.png" mode="aspectFit"></image>
						<text class="item-text">消防管理</text>
					</view>
					<!-- 使用 @click 绑定事件，直接传递路径参数 -->
					<view class="module-item" @click="goToPage('/pages/zhihuiJiating/zhihuiJiating')">
						<!-- 使用 :src 绑定图片路径 -->
						<image class="item-icon" src="/static/images/icon_zhihui_jiating.png" mode="aspectFit"></image>
						<text class="item-text">智慧家庭</text>
					</view>
				</view>
			</view>

			<!-- 项目管理模块 -->
			<view class="module-card module-card--full-width">
				<view class="module-title-wrapper">
					<text class="module-title">项目管理</text>
					<view class="title-underline"></view>
				</view>
				<view class="module-items module-items--four-columns">
					<!-- 使用 @click 绑定事件，直接传递路径参数 -->
					<view class="module-item" @click="goToPage('/pages/jichengshang/jichengshang')">
						<!-- 使用 :src 绑定图片路径 -->
						<image class="item-icon" src="/static/images/icon_jichengshang.png" mode="aspectFit"></image>
						<text class="item-text">集成商</text>
					</view>
					<!-- 使用 @click 绑定事件，直接传递路径参数 -->
					<view class="module-item" @click="goToPage('/pages/anzhuang/anzhuang')">
						<!-- 使用 :src 绑定图片路径 -->
						<image class="item-icon" src="/static/images/icon_anzhuang.png" mode="aspectFit"></image>
						<text class="item-text">安装</text>
					</view>
					<!-- 使用 @click 绑定事件，直接传递路径参数 -->
					<view class="module-item" @click="goToPage('/pages/diaoshi/diaoshi')">
						<!-- 使用 :src 绑定图片路径 -->
						<image class="item-icon" src="/static/images/icon_diaoshi.png" mode="aspectFit"></image>
						<text class="item-text">调试</text>
					</view>
					<!-- 使用 @click 绑定事件，直接传递路径参数 -->
					<view class="module-item" @click="goToPage('/pages/yunwei/yunwei')">
						<!-- 使用 :src 绑定图片路径 -->
						<image class="item-icon" src="/static/images/icon_yunwei.png" mode="aspectFit"></image>
						<text class="item-text">运维</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 操作指引区域 -->
		<!-- 使用 @click 绑定事件 -->
		<view class="operation-guide-area" @click="goToOperationGuide">
			<!-- 使用 :src 绑定图片路径 -->
			<image class="operation-guide-bg-image" src="/static/images/operation_guide.png" mode="widthFix"></image>
			<text class="operation-guide-text">操作指引</text>
		</view>

		<!-- 消防资讯分隔标题 -->
		<view class="news-section-title">
			<text class="title-text">消防资讯</text>
		</view>

		<!-- 消防资讯列表区域 -->
		<view class="news-list">
			<!-- 这里是你的资讯列表项渲染 -->
			<!-- 使用 v-for 遍历数组，:key 绑定唯一标识 -->
			<view class="news-item" v-for="(item, index) in newsList" :key="item.id" @click="goToNewsDetail(item.id)">
				<!-- 使用 :src 绑定图片路径 -->
				<image :src="item.cover" class="news-cover"></image>
				<view class="news-info">
					<!-- 使用 {{ }} 数据绑定文本内容 -->
					<text class="news-title">{{item.title}}</text>
					<text class="news-source">{{item.source}}</text>
					<text class="news-date">{{item.date}}</text>
				</view>
			</view>
			<!-- 如果需要触底加载时的 loading 提示 -->
			<view class="loading-text" v-if="loading">加载中...</view>
			<view class="loading-text" v-if="finished">没有更多了</view>
		</view>

		<!-- 底部导航栏 (由 pages.json 配置生成) -->

	</view>

</template>

<script>
	export default {
		data() {
			return {
				newsList: [], // 存储资讯列表数据
				page: 1, // 当前页码
				pageSize: 10, // 每页加载数量
				loading: false, // 是否正在加载中
				finished: false // 是否已加载全部数据
			}
		},
		onLoad() {
			// 页面加载时调用加载数据方法
			this.loadNewsList();
		},
		// uni-app 的触底事件
		onReachBottom() {
			// 触底时调用加载更多方法
			this.loadMore();
		},
		methods: {
			// 导航到指定页面
			goToPage(url) {
				uni.navigateTo({
					url: url
				});
				console.log('导航到页面:', url);
			},
			// 导航到操作指引页面
			goToOperationGuide() {
				uni.navigateTo({
					url: '/pages/operationGuide/operationGuide' // 替换为你实际的操作指引页面路径
				});
				console.log('导航到操作指引页面');
			},
			loadNewsList() {
				// 模拟异步请求获取资讯列表数据
				if (this.loading || this.finished) {
					return; // 如果正在加载或已加载完成，不再重复加载
				}
				this.loading = true; // 设置加载状态为 true
				console.log('加载第', this.page, '页数据...');
				// 模拟网络请求延迟
				setTimeout(() => {
					// 模拟分页数据
					const startIndex = (this.page - 1) * this.pageSize;
					const endIndex = startIndex + this.pageSize;
					const newData = this.generateMockNews(startIndex, endIndex); // 生成模拟数据
					if (newData.length < this.pageSize) {
						// 如果获取到的数据少于每页数量，说明已经加载完了
						this.finished = true;
					}
					// 将新数据添加到 existingArray 后面
					this.newsList = this.newsList.concat(newData);
					this.page++; // 页码加一
					this.loading = false; // 设置加载状态为 false
					console.log('数据加载完成，当前列表长度：', this.newsList.length);
				}, 1500); // 模拟1.5秒延迟
			},
			loadMore() {
				// 触底加载更多数据
				this.loadNewsList(); // 调用加载列表的方法即可
			},
			generateMockNews(startIndex, endIndex) {
				const newsData = [];
				const totalNews = 35; // 模拟总共有35条资讯
				const predefinedTitles = [
					'远离明火！夏季驱蚊灭蚊喷雾千万要注意',
					'消防试验演示 揭示卡式炉使用关键风险点',
					'高温天气里哪些物品不能放置在车内',
					'使用蚊香要知道的消防安全知识',
					'电瓶车充电安全需警惕，这些事项要注意',
					'如何正确使用灭火器？种类和方法全解析',
					'高层住宅火灾逃生指南，关键时刻能救命',
					'消防安全知识进校园，提高学生自救能力',
					'春季防火需警惕，农村火灾易发季',
					'加油站防火安全规范，保障生命财产安全'
				];

				for (let i = startIndex; i < endIndex && i < totalNews; i++) {
					newsData.push({
						id: i + 1, // 资讯ID
						// 从预设标题数组中，根据索引或者随机选择一个标题
						// 这里使用取模运算让标题循环出现
						title: predefinedTitles[i % predefinedTitles.length],
						cover: `/static/images/cover_${(i % 10) + 1}.png`,
						source: `来源: 新闻机构 ${ Math.floor(i / 10) + 1}`,
						date: `2023-0 ${ Math.floor(i / 7) + 1}-${(i % 28) + 1}`
					});
				}
				return newsData;
			},
			goToNewsDetail(id) {
				// 导航到资讯详情页面，并传递资讯ID
				uni.navigateTo({
					url: `/pages/newsDetail/newsDetail?id=${id}`
				});
				console.log('点击了资讯，ID:', id);
			}
		}
	}
</script>

<style scoped>
	.container {
		padding-bottom: 120rpx;
		background-color: #f0f4f7;
	}

	/* Swiper 容器样式 */
	.banner-swiper {
		height: 350rpx;
		/* Swiper 的高度需要设置，与原 Banner 高度一致 */
		margin-bottom: 30rpx;
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		overflow: hidden;
		/* 确保内容不会超出圆角 */
	}

	/* 将 section-banner 的样式应用到 swiper-item 内的 container */
	/* Swiper Item 内的容器 */
	.section-banner {
		position: relative;
		height: 100%;
		/* 占满 swiper-item 的高度 */
		width: 100%;
		/* 占满 swiper-item 的宽度 */
		border-bottom-left-radius: 20rpx;
		/* 保持圆角 */
		border-bottom-right-radius: 20rpx;
		/* 保持圆角 */
		overflow: hidden;
		/* 确保背景图不会超出圆角 */
	}

	.banner-bg {
		width: 100%;
		height: 100%;
	}

	.banner-content {
		position: absolute;
		top: 50%;
		left: 40rpx;
		transform: translateY(-50%);
		color: #fff;
		z-index: 1;
	}

	.banner-title {
		font-size: 48rpx;
		font-weight: bold;
	}

	.divider {
		width: 80rpx;
		height: 6rpx;
		background-color: #fff;
		margin: 10rpx 0;
	}

	.banner-desc {
		font-size: 26rpx;
		line-height: 1.4;
	}

	/* 移除之前手动圆点指示器的样式 */
	/*
	.dots-indicator { ... }
	.dot { ... }
	.dot.active { ... }
	*/

	/* 功能模块区域 */
	.modules {
		display: flex;
		flex-wrap: wrap;
		padding: 0 30rpx;
		justify-content: space-between;
	}

	.module-card {
		width: calc(50% - 15rpx);
		background-color: #ffffff;
		border-radius: 20rpx;
		padding: 30rpx;
		margin-bottom: 30rpx;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.05);
		box-sizing: border-box;
	}

	.module-card--right {
		/* ... */
	}

	.module-card--full-width {
		width: 100%;
	}

	.module-title-wrapper {
		position: relative;
		margin-bottom: 30rpx;
	}

	.module-title {
		font-size: 36rpx;
		font-weight: bold;
		color: #333333;
		z-index: 1;
		position: relative;
	}

	.title-underline {
		position: absolute;
		bottom: -5rpx;
		left: 0;
		width: 80rpx;
		height: 10rpx;
		background: linear-gradient(to right, #4A90E2, rgba(74, 144, 226, 0.3));
		border-radius: 5rpx;
	}

	.module-items {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.module-items--four-columns {
		justify-content: space-between;
	}


	.module-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50%;
		margin-bottom: 20rpx;
	}

	.module-items--four-columns .module-item {
		width: 25%;
		margin-bottom: 0;
	}


	.item-icon {
		width: 80rpx;
		height: 80rpx;
		margin-bottom: 10rpx;
	}

	.item-text {
		font-size: 28rpx;
		color: #666666;
		text-align: center;
	}

	/* 操作指引 Banner */
	/* 注释掉的旧样式保留，新的在下面 */
	/*
	.operation-guide-banner {
		height: 200rpx;
	}

	.operation-guide-content {
		position: static;
		transform: none;
		padding: 0 40rpx;
		display: flex;
		align-items: center;
		height: 100%;
	}

	.operation-guide-title {
		font-size: 50rpx;
		font-weight: bold;
		color: ##ff0000;
		margin-right: 20rpx;
	}
	*/

	/* operation guide area styles */
	.operation-guide-area {
		margin-top: 20rpx;
		/* 根据需要调整与上方内容的间距 */
		padding: 0 30rpx;
		/* 根据需要调整左右内边距 */
		position: relative;
		/* 设置相对定位，使其子元素可以使用绝对定位 */
		overflow: hidden;
		/* 如果图片有圆角，同时防止内容超出容器 */
		border-radius: 10rpx;
		/* 如果有圆角需求 */
	}

	.operation-guide-bg-image {
		width: 100%;
		/* 让图片宽度占满容器 */
		display: block;
		/* 使 image 元素变为块级元素 */
	}

	.operation-guide-text {
		position: absolute;
		/* 设置绝对定位，脱离文档流 */
		top: 50rpx;
		/* 根据设计调整文本距离顶部的距离 */
		left: 50rpx;
		/* 根据设计调整文本距离左侧的距离 */
		font-size: 36rpx;
		/* 根据设计调整字体大小 */
		color: #ffffff;
		/* 根据设计调整字体颜色，图片中是白色 */
		/* 可以根据需要添加其他文本样式，如 font-weight */
		/* 如果需要透明度效果，可以使用 rgba 或 opacity */
		/* 例如：color: rgba(255, 255, 255, 0.8); */
	}

	/* 消防资讯分隔标题样式 */
	.news-section-title {
		display: flex;
		align-items: center;
		padding: 30rpx 0;
		/* 上下内边距，增加与上下内容的距离 */
		margin: 0 30rpx;
		/* 左右外边距，与内容区域对齐 */
		/*background-color: #f0f4f7;  根据实际情况是否需要背景色 */
		position: relative;
		/* 用于定位伪元素 */
	}

	.news-section-title::before {
		content: '';
		position: absolute;
		left: -30rpx;
		/* 与容器左侧对齐 */
		top: 50%;
		transform: translateY(-50%);
		width: 10rpx;
		/* 左侧线条宽度 */
		height: 30rpx;
		/* 左侧线条高度 */
		background-color: #4A90E2;
		/* 左侧线条颜色 */
		border-radius: 5rpx;
		/* 可选：给线条添加圆角 */
	}

	.news-section-title .title-text {
		font-size: 36rpx;
		font-weight: bold;
		color: #333333;
		padding-left: 20rpx;
		/* 为文本留出左侧线条的空间 */
	}


	.news-list {
		padding: 10rpx;
	}

	.news-item {
		display: flex;
		margin-bottom: 20rpx;
		border-bottom: 1rpx solid #eee;
		padding-bottom: 15rpx;
	}

	.news-cover {
		width: 200rpx;
		height: 150rpx;
		margin-right: 20rpx;
		border-radius: 8rpx;
		flex-shrink: 0;
		/* 防止图片被压缩 */
	}

	.news-info {
		flex: 1;
		/* 占据剩余空间 */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* 在主轴上均匀分布 */
	}

	.news-title {
		font-size: 30rpx;
		font-weight: bold;
		overflow: hidden;
		/* 隐藏超出部分 */
		text-overflow: ellipsis;
		/* 显示省略号 */
		display: -webkit-box;
		/* 作为弹性伸缩盒子模型显示 */
		-webkit-box-orient: vertical;
		/* 设置或检索伸缩盒对象的子元素的排列方式 */
		-webkit-line-clamp: 2;
		/* 限制显示的行数 */
	}

	.news-source,
	.news-date {
		font-size: 24rpx;
		color: #999;
		margin-top: 5rpx;
	}

	.loading-text {
		text-align: center;
		padding: 20rpx;
		font-size: 28rpx;
		color: #999;
	}
</style>