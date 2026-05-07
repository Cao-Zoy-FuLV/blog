<script setup>
import {ref} from 'vue'

const personalInfo = {
  name: '简历',
  position: 'C/C++ / JAVA / 前端开发工程师 ',
  phone: '15659852382',
  email: '15659852382@163.com',
  status: '随时到岗'
}

const skills = [
  {
    title: 'C/C++核心',
    content: '深入理解 C++11/14/17 核心特性（智能指针、右值引用、Lambda等）；熟练掌握 CMake 构建工具，能编写复杂的 CMakeLists.txt管理大型项目；熟悉 g++/Clang 编译工具链及 GDB 调试。'
  },
  {
    title: 'Java开发',
    content: '熟练掌握 Java 基础，熟悉 Spring Boot、MyBatis 等主流框架；熟悉 RuoYi 快速开发平台，具备后台管理系统二次开发经验'
  },
  {
    title: '前端技术',
    content: '熟悉 HTML5/CSS3/JavaScript，及Vue.js 前端框架，具备独立开发简单网页及后台管理系统的能力熟练使用 Git 版本控制；善于使用 Cursor 等 AI 工具辅助编程，提升开发效率'
  },
  {
    title: '数据库',
    content: '熟练使用 MySQL、SQL Server 数据库，能够编写复杂的 SQL 查询语句，了解索引优化及事务处理。'
  },
  {
    title: '底层基础',
    content: '深入理解 TCP/IP 网络协议及 HTTP/HTTPS 流程；熟悉 Linux 环境开发，熟练使用 Shell 命令及系统编程接口。'
  }
]

const projects = [
  {
    name: '高并发内存池（仿TCMalloc）',
    tech: 'C++11 | 多线程',
    time: '2025.10 – 2026.03',
    link: 'https://gitee.com/wo--shi--ni--die/concurrent-memory-pool',
    description: '基于 Google TCMalloc 算法实现的高性能并发内存池，采用三层缓存架构替代系统 malloc/free，优化多线程内存分配性能，减少内存碎片',
    details: [
      '核心架构：设计 Thread Cache（线程缓存）、Central Cache（中心缓存）、Page Cache（页缓存） 三层架构。利用 TLS（线程局部存储） 技术实现 Thread Cache 的无锁访问，极大提升了小对象的分配效率。',
      '性能优化：定长内存映射优化: 5 级对齐策略（8B/16B/128B/1KB/8KB）定长池，208 个哈希桶映射，替代全局锁，合并相邻空闲页，内碎片 <10%、采用 208 桶细粒度锁 + 结合 基数树（Radix Tree） 实现 O(1) 复杂度的内存地址查找，多核并发下相比 malloc 性能提升显著，线性扩展至多 CPU 核心；在 Central Cache 中引入慢启动算法动态调整内存申请批量。'
    ]
  },
  {
    name: 'OCR 屏幕识别与翻译服务',
    tech: 'Windows API | OpenCV | Tesseract | LibreTranslate',
    time: '2026.02 – 2026.04',
    link: 'https://gitee.com/wo--shi--ni--die/ocr_service',
    description: '基于 Windows API、OpenCV 和 Tesseract OCR 的屏幕区域文字识别与翻译服务，集成 LibreTranslate 实现截图→识别→翻译完整工作流。',
    details: [
      '功能设计：全局热键触发，实现快捷键，键盘钩子监听 + 500ms 防抖机制，屏幕区域选择： WS_EX_LAYERED 半透明遮罩 + R2_XORPEN XOR 绘图无闪烁选区 + BitBlt 截图。后OpenCV图像处理，灰度转换、图像增强、自适应二值化，提升 OCR 识别准确率, 智能文本行合并算法解决中文分割问题、WinHTTP 集成 LibreTranslate，语言自动检测（中英互译），采用独立工作的并发处理线程避免阻塞 UI、容器化部署： Docker Compose 部署翻译服务，资源限制 + 数据卷持久化'
    ]
  },
  {
    name: '荣阳鞋业后台管理系统（ERP 系统）',
    tech: 'Spring Boot + MyBatis + MySQL + Vue3 + RuoYi框架',
    time: '2024.08 – 2026.02',
    description: '针对鞋业制造流程定制的 ERP 平台，涵盖物料管理、生产订单、库存矩阵管理及数据报表分析，旨在解决传统鞋业生产数据不透明、管理混乱的问题。',
    details: [
      '后端开发：基于 RuoYi 框架进行二次开发，独立负责 库存管理模块 的 API 设计与实现，解决了鞋业特有的"款-色-码"多维度库存查询难题。',
      '前端优化：使用 Vue3 定制通用组件库，优化页面交互逻辑，修复系统 Bug，显著提升了用户操作体验。'
    ]
  }
]

const workExperience = {
  company: '泉州荣上信息服务咨询',
  position: '软件工程师',
  time: '2024.08 – 2026.02',
  responsibilities: [
    '系统二开：负责公司内部后台系统及泛微OA系统的流程模块设计与代码实现，通过优化审批流代码，提升了内部流转效率。',
    '技术支持：现场实施 ERP 系统的现场部署与调试，快速定位并解决生产环境中的技术报错，保障客户业务连续性。'
  ]
}

const education = {
  school: '厦门海洋职业技术学院',
  major: '软件技术',
  time: '2022 – 2025',
  achievements: [
    '核心成绩：2024级专业成绩排名前 1%',
    '荣誉奖项：校综合奖学金"励志奖"（连续2年），校二等奖学金，校级优秀毕业生'
  ]
}
</script>

<template>
  <div class="cv-wrapper">
    <div class="paper-container">
      <lay-container>
        <!-- 头部信息 -->
        <lay-card :bordered="false" class="header-card">
          <div class="header-content">
            <h1 class="name">{{ personalInfo.name }}</h1>
            <p class="position">{{ personalInfo.position }}</p>
            <div class="contact-info">
              <span>
                <lay-icon type="layui-icon-cellphone"></lay-icon>
                {{ personalInfo.phone }}
              </span>
              <span>
                <lay-icon type="layui-icon-email"></lay-icon>
                {{ personalInfo.email }}
              </span>
              <span>
                <lay-icon type="layui-icon-flag"></lay-icon>
                {{ personalInfo.status }}
              </span>
            </div>
          </div>
        </lay-card>

        <!-- 专业技能 -->
        <div class="section">
          <h2 class="section-title">
            <lay-icon type="layui-icon-engine" color="#667eea"></lay-icon>
            专业技能
          </h2>
          <lay-row :space="15">
            <lay-col v-for="(skill, index) in skills" :key="index" :md="index === 0 ? 24 : 12">
              <lay-card :bordered="true" class="skill-card">
                <h3 class="skill-title">{{ skill.title }}</h3>
                <p class="skill-content">{{ skill.content }}</p>
              </lay-card>
            </lay-col>
          </lay-row>
        </div>

        <!-- 项目经历 -->
        <div class="section">
          <h2 class="section-title">
            <lay-icon type="layui-icon-app" color="#667eea"></lay-icon>
            项目经历
          </h2>
          <lay-card v-for="(project, index) in projects" :key="index" :bordered="true" class="project-card">
            <div class="card-header">
              <h3 class="card-title">{{ project.name }}</h3>
              <div class="card-meta">
                <span class="tech-tag">{{ project.tech }}</span>
                <span class="time-tag">{{ project.time }}</span>
              </div>
            </div>
            <a v-if="project.link" :href="project.link" target="_blank" class="project-link">
              <lay-icon type="layui-icon-link"></lay-icon>
              Gitee项目地址→
            </a>
            <p class="card-desc">{{ project.description }}</p>
            <ul class="card-details">
              <li v-for="(detail, idx) in project.details" :key="idx">{{ detail }}</li>
            </ul>
          </lay-card>
        </div>

        <!-- 工作经历 -->
        <div class="section">
          <h2 class="section-title">
            <lay-icon type="layui-icon-user" color="#667eea"></lay-icon>
            工作经历
          </h2>
          <lay-card :bordered="true" class="work-card">
            <div class="card-header">
              <h3 class="card-title">{{ workExperience.company }}</h3>
              <div class="card-meta">
                <span class="tech-tag">{{ workExperience.position }}</span>
                <span class="time-tag">{{ workExperience.time }}</span>
              </div>
            </div>
            <ul class="card-details">
              <li v-for="(resp, index) in workExperience.responsibilities" :key="index">{{ resp }}</li>
            </ul>
          </lay-card>
        </div>

        <!-- 教育背景 -->
        <div class="section">
          <h2 class="section-title">
            <lay-icon type="layui-icon-read" color="#667eea"></lay-icon>
            教育背景
          </h2>
          <lay-card :bordered="true" class="education-card">
            <div class="card-header">
              <h3 class="card-title">{{ education.school }}</h3>
              <div class="card-meta">
                <span class="tech-tag">{{ education.major }}</span>
                <span class="time-tag">{{ education.time }}</span>
              </div>
            </div>
            <ul class="card-details">
              <li v-for="(achieve, index) in education.achievements" :key="index">{{ achieve }}</li>
            </ul>
          </lay-card>
        </div>
      </lay-container>
    </div>
  </div>
</template>

<style scoped>
/* ==================== 布局与容器 ==================== */
.cv-wrapper {
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.paper-container {
  max-width: 1000px;
  width: 100%;
  background: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08),
  0 4px 16px rgba(0, 0, 0, 0.06);
  position: relative;
}

/* ==================== 头部区域 ==================== */
.header-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: none !important;
}

.header-card :deep(.lay-card__body) {
  padding: 32px 24px;
}

.header-content {
  text-align: center;
  color: white;
}

.name {
  font-size: 28px;
  font-weight: 700;
  margin: 8px 0 12px 0;
  letter-spacing: 2px;
}

.position {
  font-size: 14px;
  margin: 0 0 8px 0;
  opacity: 0.95;
  font-weight: 500;
}

.contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  flex-wrap: wrap;
  font-size: 13px;
  color: white;
}

.contact-info span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.contact-info span:not(:last-child) {
  padding-right: 12px;
}

.contact-info span:not(:last-child)::after {
  content: "|";
  padding-left: 12px;
  opacity: 0.4;
}

/* ==================== 通用区块样式 ==================== */
.section {
  margin-bottom: 32px;
}

.section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 16px;
  border-left: 4px solid #667eea;
}

.section-title .lay-icon {
  color: #667eea;
  font-size: 20px;
}

/* ==================== 技能卡片 ==================== */
.skill-card {
  background: #f8f9fa !important;
  border: none !important;
  border-left: 3px solid #667eea !important;
  border-radius: 6px;
  box-shadow: none !important;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 100px;
}

.skill-card :deep(.lay-card__body) {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.skill-card:hover {
  background: #ffffff !important;
  transform: translateX(8px);
  border-color: #667eea !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
}

.skill-title {
  font-size: 16px;
  color: #667eea;
  margin: 0 0 10px 0;
  font-weight: 600;
}

.skill-content {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  margin: 0;
  flex: 1;
}

/* ==================== 项目/工作/教育卡片 ==================== */
.project-card,
.work-card,
.education-card {
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid #e8e8e8 !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04) !important;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover,
.work-card:hover,
.education-card:hover {
  border-color: #667eea !important;
  background: #ffffff !important;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15) !important;
}

.project-card:last-child,
.work-card:last-child,
.education-card:last-child {
  margin-bottom: 0;
}

/* ==================== 卡片内部布局 ==================== */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  flex-wrap: nowrap;
  gap: 12px;
}

.card-title {
  font-size: 16px;
  color: #333;
  margin: 0;
  font-weight: 600;
  flex-shrink: 0;
}

.card-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 1;
}

/* ==================== 标签样式 ==================== */
.card-meta .tech-tag {
  font-size: 12px;
  padding: 4px 12px;
  background: #e8f0fe;
  color: #667eea;
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 4px;
}

.card-meta .time-tag {
  font-size: 12px;
  padding: 4px 12px;
  background: #f5f5f5;
  color: #666;
  border-radius: 4px;
}

/* ==================== 链接与描述 ==================== */
.project-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #667eea;
  text-decoration: none;
  margin-bottom: 12px;
  font-size: 13px;
  transition: color 0.2s;
}

.project-link:hover {
  color: #764ba2;
  text-decoration: underline;
}

.card-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.7;
  margin: 12px 0;
}

/* ==================== 列表样式 ==================== */
.card-details {
  list-style: none;
  padding: 0;
  margin: 12px 0 0 0;
}

.card-details li {
  font-size: 13px;
  color: #555;
  line-height: 1.8;
  padding-left: 16px;
  position: relative;
  margin-bottom: 6px;
}

.card-details li:before {
  content: "•";
  color: #667eea;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 14px;
}

/* ==================== 响应式设计 ==================== */
@media (max-width: 768px) {
  .cv-wrapper {
    padding: 16px;
  }

  .paper-container {
    padding: 24px 20px;
  }

  .position {
    font-size: 13px;
  }

  .contact-info {
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .section-title {
    font-size: 16px;
  }

  .card-header {
    flex-direction: column;
    gap: 8px;
  }

  .card-meta {
    width: 100%;
  }
}

/* ==================== 打印样式 ==================== */
@media print {
  .cv-wrapper {
    padding: 0;
  }

  .project-card:hover {
    box-shadow: none;
  }
}
</style>
