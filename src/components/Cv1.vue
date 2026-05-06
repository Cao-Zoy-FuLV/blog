<!-- Cv1.vue -->
<script setup>
import { ref } from 'vue'

// 个人信息
const personalInfo = ref({
  name: '张三',
  position: 'C/C++ / JAVA / 前端开发工程师 / 实施工程师',
  phone: '15659852382',
  email: '15659852382@163.com',
  status: '随时到岗',
  avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206762a7e5e65640_png.png'
})

// 专业技能
const skills = ref([
  {
    id: 1,
    title: 'C/C++ 核心',
    content: '深入理解 C++11/14/17 核心特性（智能指针、右值引用、Lambda 等）；熟练掌握 CMake 构建工具，能编写复杂的 CMakeLists.txt 管理大型项目；熟悉 g++/Clang 编译工具链及 GDB 调试。',
    level: 95,
    icon: '🔧',
    color: '#667eea'
  },
  {
    id: 2,
    title: 'Java 开发',
    content: '熟练掌握 Java 基础，熟悉 Spring Boot、MyBatis 等主流框架；熟悉 RuoYi 快速开发平台，具备后台管理系统二次开发经验',
    level: 85,
    icon: '☕',
    color: '#f59e0b'
  },
  {
    id: 3,
    title: '前端技术',
    content: '熟悉 HTML5/CSS3/JavaScript，及 Vue.js 前端框架，具备独立开发简单网页及后台管理系统的能力；熟练使用 Git 版本控制；善于使用 Cursor 等 AI 工具辅助编程，提升开发效率',
    level: 80,
    icon: '🎨',
    color: '#3b82f6'
  },
  {
    id: 4,
    title: '数据库',
    content: '熟练使用 MySQL、SQL Server 数据库，能够编写复杂的 SQL 查询语句，了解索引优化及事务处理。',
    level: 75,
    icon: '💾',
    color: '#8b5cf6'
  },
  {
    id: 5,
    title: '底层基础',
    content: '深入理解 TCP/IP 网络协议及 HTTP/HTTPS 流程；熟悉 Linux 环境开发，熟练使用 Shell 命令及系统编程接口。',
    level: 85,
    icon: '🌐',
    color: '#10b981'
  }
])

// 项目经历
const projects = ref([
  {
    id: 1,
    name: '高并发内存池（仿 TCMalloc）',
    tech: 'C++11 | 多线程',
    time: '2025.10 – 2026.03',
    link: 'https://gitee.com/wo--shi--ni--die/concurrent-memory-pool',
    description: '基于 Google TCMalloc 算法实现的高性能并发内存池，采用三层缓存架构替代系统 malloc/free，优化多线程内存分配性能，减少内存碎片',
    details: [
      '核心架构：设计 Thread Cache（线程缓存）、Central Cache（中心缓存）、Page Cache（页缓存）三层架构。利用 TLS 技术实现 Thread Cache 的无锁访问，极大提升了小对象的分配效率。',
      '性能优化：定长内存映射优化 - 5 级对齐策略（8B/16B/128B/1KB/8KB）定长池，208 个哈希桶映射，替代全局锁，合并相邻空闲页，内碎片 <10%。采用 208 桶细粒度锁 + 基数树实现 O(1) 复杂度的内存地址查找，多核并发下相比 malloc 性能提升显著，线性扩展至多 CPU 核心。',
      '动态调整：在 Central Cache 中引入慢启动算法动态调整内存申请批量，平衡并发性能与资源利用率。'
    ],
    status: '进行中'
  },
  {
    id: 2,
    name: '荣阳鞋业后台管理系统（ERP 系统）',
    tech: 'Spring Boot + MyBatis + MySQL + Vue3 + RuoYi',
    time: '2024.08 – 2026.02',
    description: '针对鞋业制造流程定制的 ERP 平台，涵盖物料管理、生产订单、库存矩阵管理及数据报表分析，旨在解决传统鞋业生产数据不透明、管理混乱的问题。',
    details: [
      '后端开发：基于 RuoYi 框架进行二次开发，独立负责库存管理模块的 API 设计与实现，解决了鞋业特有的"款 - 色 - 码"多维度库存查询难题。',
      '前端优化：使用 Vue3 定制通用组件库，优化页面交互逻辑，修复系统 Bug，显著提升了用户操作体验。',
      '性能优化：通过连接池优化、SQL 索引优化，使系统并发处理能力提升了 40%。'
    ],
    status: '已完成'
  }
])

// 工作经历
const workExperience = ref({
  company: '泉州荣上信息服务咨询',
  position: '实施工程师（偏技术开发方向）',
  time: '2024.08 – 2026.02',
  responsibilities: [
    '系统二开：负责公司内部后台系统及泛微 OA 系统的流程模块设计与代码实现，通过优化审批流代码，提升了内部流转效率。',
    '技术支持：现场实施 ERP 系统的现场部署与调试，快速定位并解决生产环境中的技术报错，保障客户业务连续性。',
    '客户沟通：作为技术接口人，与产品经理、客户保持高效沟通，确保需求准确理解和系统交付。',
    '文档编写：编写系统部署文档、操作手册、技术文档，规范团队开发流程。'
  ],
  status: '进行中'
})

// 教育背景
const education = ref({
  school: '厦门海洋职业技术学院',
  major: '软件技术',
  time: '2022 – 2025',
  achievements: [
    '核心成绩：2024 级专业成绩排名前 1%',
    '荣誉奖项：校综合奖学金"励志奖"（连续 2 年），校二等奖学金，校级优秀毕业生',
    '技能证书：获得 C++ 编程能力认证、前端开发基础证书'
  ],
  status: '即将毕业'
})
</script>

<template>
  <div class="cv-wrapper">
    <div class="paper-container">
      <!-- 头部信息 -->
      <div class="header-section">
        <div class="header-left">
          <h1 class="name">{{ personalInfo.name }}</h1>
          <p class="position">{{ personalInfo.position }}</p>
          <div class="tags">
            <span class="status-tag">{{ personalInfo.status }}</span>
          </div>
        </div>
        <div class="header-right">
          <div class="avatar">
            <img :src="personalInfo.avatar" alt="头像" />
          </div>
        </div>
      </div>

      <div class="contact-bar">
        <span class="contact-item">
          <span class="icon">📱</span>
          {{ personalInfo.phone }}
        </span>
        <span class="contact-item">
          <span class="icon">✉️</span>
          {{ personalInfo.email }}
        </span>
      </div>

      <!-- 专业技能 -->
      <div class="section">
        <h2 class="section-title">
          <span class="title-icon">💡</span>
          专业技能
        </h2>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.id" class="skill-item">
            <div class="skill-header">
              <span class="skill-icon">{{ skill.icon }}</span>
              <span class="skill-name">{{ skill.title }}</span>
            </div>
            <p class="skill-desc">{{ skill.content }}</p>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: skill.level + '%', background: skill.color }"></div>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 项目经历 -->
      <div class="section">
        <h2 class="section-title">
          <span class="title-icon">🚀</span>
          项目经历
        </h2>
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-header">
            <h3 class="project-name">{{ project.name }}</h3>
            <span class="project-status" :class="project.status === '进行中' ? 'ongoing' : 'completed'">
              {{ project.status }}
            </span>
          </div>
          <div class="project-meta">
            <span class="tech-badge">{{ project.tech }}</span>
            <span class="time-badge">{{ project.time }}</span>
          </div>
          <p class="project-desc">{{ project.description }}</p>
          <ul class="project-details">
            <li v-for="(detail, idx) in project.details" :key="idx">{{ detail }}</li>
          </ul>
          <a v-if="project.link" :href="project.link" target="_blank" class="project-link">
            <span>🔗</span> 查看项目源码
          </a>
        </div>
      </div>

      <!-- 工作经历 -->
      <div class="section">
        <h2 class="section-title">
          <span class="title-icon">💼</span>
          工作经历
        </h2>
        <div class="work-card">
          <div class="work-header">
            <h3 class="work-company">{{ workExperience.company }}</h3>
            <span class="work-status" :class="workExperience.status === '进行中' ? 'ongoing' : 'completed'">
              {{ workExperience.status }}
            </span>
          </div>
          <div class="work-meta">
            <span class="position-badge">{{ workExperience.position }}</span>
            <span class="time-badge">{{ workExperience.time }}</span>
          </div>
          <ul class="work-responsibilities">
            <li v-for="(resp, index) in workExperience.responsibilities" :key="index">{{ resp }}</li>
          </ul>
        </div>
      </div>

      <!-- 教育背景 -->
      <div class="section">
        <h2 class="section-title">
          <span class="title-icon">🎓</span>
          教育背景
        </h2>
        <div class="education-card">
          <div class="edu-header">
            <h3 class="edu-school">{{ education.school }}</h3>
            <span class="edu-status" :class="education.status === '即将毕业' ? 'ongoing' : 'completed'">
              {{ education.status }}
            </span>
          </div>
          <div class="edu-meta">
            <span class="major-badge">{{ education.major }}</span>
            <span class="time-badge">{{ education.time }}</span>
          </div>
          <ul class="edu-achievements">
            <li v-for="(achieve, index) in education.achievements" :key="index">{{ achieve }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ==================== 布局容器 ==================== */
.cv-wrapper {
  min-height: 100vh;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.paper-container {
  max-width: 900px;
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.1),
    0 2px 10px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  position: relative;
}

/* 顶部装饰条 */
.paper-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}

/* ==================== 头部区域 ==================== */
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 40px 20px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
}

.header-section::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  height: 40px;
  background: #ffffff;
  border-radius: 50% 50% 0 0;
}

.header-left {
  flex: 1;
  color: white;
  position: relative;
  z-index: 1;
}

.name {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px 0;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.position {
  font-size: 15px;
  margin: 0 0 12px 0;
  opacity: 0.95;
  font-weight: 500;
  line-height: 1.5;
}

.tags {
  display: flex;
  gap: 8px;
}

.status-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  font-size: 12px;
  backdrop-filter: blur(10px);
}

.header-right {
  position: relative;
  z-index: 1;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contact-bar {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 24px 40px;
  background: #f8f9fa;
  border-bottom: 1px solid #e8e8e8;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #555;
}

.contact-item .icon {
  font-size: 16px;
}

/* ==================== 通用区块样式 ==================== */
.section {
  padding: 32px 40px;
  position: relative;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 16px;
  border-left: 4px solid #667eea;
}

.title-icon {
  font-size: 22px;
}

/* ==================== 技能网格 ==================== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.skill-item {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e8e8e8;
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);
  border-color: #667eea;
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.skill-icon {
  font-size: 24px;
}

.skill-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.skill-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.7;
  margin: 0 0 16px 0;
}

.skill-bar {
  position: relative;
  height: 8px;
  background: #e8e8e8;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease;
}

.skill-level {
  position: absolute;
  right: 0;
  top: -22px;
  font-size: 12px;
  color: #999;
  font-weight: 600;
}

/* ==================== 项目卡片 ==================== */
.project-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  position: relative;
}

.project-card:hover {
  border-color: #667eea;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.12);
  transform: translateY(-2px);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 12px;
}

.project-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
  flex-shrink: 1;
}

.project-status {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  flex-shrink: 0;
}

.project-status.ongoing {
  background: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
}

.project-status.completed {
  background: #e3f2fd;
  color: #1976d2;
  border: 1px solid #bbdefb;
}

.project-meta {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.tech-badge {
  padding: 6px 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

.time-badge {
  padding: 6px 14px;
  background: #f5f5f5;
  color: #666;
  border-radius: 6px;
  font-size: 12px;
}

.project-desc {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  margin: 0 0 16px 0;
}

.project-details {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
}

.project-details li {
  font-size: 13px;
  color: #666;
  line-height: 1.8;
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;
}

.project-details li:before {
  content: '▸';
  color: #667eea;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 14px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #667eea;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s;
  padding: 8px 16px;
  background: #f0f4ff;
  border-radius: 6px;
}

.project-link:hover {
  background: #667eea;
  color: white;
  text-decoration: none;
}

/* ==================== 工作经历卡片 ==================== */
.work-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
}

.work-card:hover {
  border-color: #667eea;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.12);
}

.work-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 12px;
}

.work-company {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.work-status {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.work-status.ongoing {
  background: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
}

.work-status.completed {
  background: #e3f2fd;
  color: #1976d2;
  border: 1px solid #bbdefb;
}

.work-meta {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.position-badge {
  padding: 6px 14px;
  background: #fff3e0;
  color: #f57c00;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #ffe0b2;
}

.work-responsibilities {
  list-style: none;
  padding: 0;
  margin: 0;
}

.work-responsibilities li {
  font-size: 14px;
  color: #555;
  line-height: 1.8;
  padding-left: 20px;
  position: relative;
  margin-bottom: 10px;
}

.work-responsibilities li:before {
  content: '✓';
  color: #4caf50;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 14px;
}

/* ==================== 教育背景卡片 ==================== */
.education-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
}

.education-card:hover {
  border-color: #667eea;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.12);
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 12px;
}

.edu-school {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.edu-status {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.edu-status.ongoing {
  background: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
}

.edu-status.completed {
  background: #e3f2fd;
  color: #1976d2;
  border: 1px solid #bbdefb;
}

.edu-meta {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.major-badge {
  padding: 6px 14px;
  background: #f3e5f5;
  color: #7b1fa2;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #e1bee7;
}

.edu-achievements {
  list-style: none;
  padding: 0;
  margin: 0;
}

.edu-achievements li {
  font-size: 14px;
  color: #555;
  line-height: 1.8;
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;
}

.edu-achievements li:before {
  content: '★';
  color: #ff9800;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 12px;
}

/* ==================== 响应式设计 ==================== */
@media (max-width: 768px) {
  .cv-wrapper {
    padding: 16px 12px;
  }

  .paper-container {
    border-radius: 12px;
  }

  .header-section {
    padding: 30px 24px 16px 24px;
    flex-direction: column;
    text-align: center;
  }

  .header-left {
    margin-bottom: 20px;
  }

  .name {
    font-size: 26px;
  }

  .position {
    font-size: 14px;
  }

  .avatar {
    width: 80px;
    height: 80px;
  }

  .contact-bar {
    padding: 20px 24px;
    gap: 20px;
    justify-content: center;
  }

  .section {
    padding: 24px;
  }

  .section-title {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .project-header,
  .work-header,
  .edu-header {
    flex-direction: column;
    gap: 8px;
  }

  .project-name,
  .work-company,
  .edu-school {
    font-size: 16px;
  }
}

/* ==================== 打印样式 ==================== */
@media print {
  .cv-wrapper {
    background: white;
    padding: 0;
  }

  .paper-container {
    box-shadow: none;
    border-radius: 0;
  }

  .paper-container::before {
    display: none;
  }

  .skill-item,
  .project-card,
  .work-card,
  .education-card {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .project-card:hover,
  .work-card:hover,
  .education-card:hover,
  .skill-item:hover {
    transform: none;
    box-shadow: none;
  }
}
</style>

