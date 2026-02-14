// 统一的文档页面样式组件
// 使用方式：在 page.tsx 中用这个结构替换 prose 类

export const DocStyles = {
  // 容器
  container: "max-w-3xl",
  
  // 标题区域
  header: "mb-10",
  title: "text-4xl font-bold text-gray-900 mb-4",
  subtitle: "text-xl text-gray-600",
  
  // 章节标题
  section: "mb-12",
  sectionTitle: "text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200",
  
  // 小节标题
  subsectionTitle: "text-lg font-semibold text-gray-900 mb-3",
  
  // 段落
  paragraph: "text-gray-600 mb-4 leading-relaxed",
  
  // 列表
  list: "space-y-3 mb-6",
  listItem: "flex items-start gap-3 text-gray-600",
  bullet: "text-orange-500 mt-1.5",
  
  // 信息框
  infoBox: "bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6",
  infoBoxBlue: "bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6",
  infoBoxYellow: "bg-yellow-50 border border-yellow-200 rounded-xl p-4",
  infoBoxGreen: "bg-green-50 border border-green-200 rounded-xl p-4",
  
  // 代码块
  codeBlock: "bg-gray-900 rounded-xl overflow-hidden mb-6",
  codeBlockLight: "bg-gray-100 rounded-xl p-4 border border-gray-200 font-mono text-sm text-gray-700",
  codeHeader: "flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700",
  codeDots: "flex gap-2",
  codeDotRed: "w-3 h-3 rounded-full bg-red-500",
  codeDotYellow: "w-3 h-3 rounded-full bg-yellow-500",
  codeDotGreen: "w-3 h-3 rounded-full bg-green-500",
  codeLabel: "ml-3 text-sm text-gray-400",
  codeContent: "p-4 text-gray-100 text-sm overflow-x-auto",
  inlineCode: "bg-gray-100 px-2 py-0.5 rounded text-sm text-gray-700 font-mono",
  
  // 卡片网格
  cardGrid: "grid sm:grid-cols-2 gap-4",
  card: "group flex items-center p-5 bg-white border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition-all",
  cardIcon: "w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition",
  cardTitle: "font-semibold text-gray-900 group-hover:text-orange-600 transition",
  cardDesc: "text-sm text-gray-500 mt-1",
  
  // 步骤
  stepNumber: "w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0",
  stepContent: "flex-1",
  
  // 链接卡片（带箭头）
  linkCard: "group flex items-center p-5 bg-white border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition-all",
  linkArrow: "w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition",
}

// 终端代码块组件
export function TerminalBlock({ children, label = "terminal" }: { children: string; label?: string }) {
  return (
    <div className={DocStyles.codeBlock}>
      <div className={DocStyles.codeHeader}>
        <div className={DocStyles.codeDots}>
          <span className={DocStyles.codeDotRed}></span>
          <span className={DocStyles.codeDotYellow}></span>
          <span className={DocStyles.codeDotGreen}></span>
        </div>
        <span className={DocStyles.codeLabel}>{label}</span>
      </div>
      <pre className={DocStyles.codeContent}><code>{children}</code></pre>
    </div>
  )
}

// 信息提示框
export function InfoBox({ 
  children, 
  type = 'default',
  icon
}: { 
  children: React.ReactNode
  type?: 'default' | 'blue' | 'yellow' | 'green'
  icon?: React.ReactNode
}) {
  const styles = {
    default: DocStyles.infoBox,
    blue: DocStyles.infoBoxBlue,
    yellow: DocStyles.infoBoxYellow,
    green: DocStyles.infoBoxGreen,
  }
  
  return (
    <div className={styles[type]}>
      {icon ? (
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">{icon}</div>
          <div>{children}</div>
        </div>
      ) : children}
    </div>
  )
}
