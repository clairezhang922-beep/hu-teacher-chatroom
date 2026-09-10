import { faqs, fictionalStories, moments, site, steps, topics } from './content'
import counselorIllustration from './assets/temporary-counselor-illustration-900.png'
import homeCounselorIllustration from './assets/temporary-home-counselor-illustration-800.png'
import campusIllustration from './assets/warm-campus-illustration-1000.png'
import editorialWide from './assets/campus-editorial-wide-1200.png'
import editorialPortrait from './assets/campus-editorial-portrait-900.png'

function Nav() {
  const links = [['关于胡老师', '#about'], ['可以聊什么', '#topics'], ['一次谈话', '#conversation'], ['常见问题', '#faq'], ['预约来访', '#contact']]
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="回到页面顶部">胡老师的聊天室</a>
    <nav className="desktop-nav" aria-label="页面导航">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
    <a className="nav-cta" href="#contact">预约 / 联系</a>
    <details className="mobile-menu">
      <summary aria-label="打开页面导航"><span></span><span></span></summary>
      <nav aria-label="移动页面导航">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}<a className="menu-cta" href="#contact">预约 / 联系</a></nav>
    </details>
  </header>
}

function App() {
  return <>
    <a className="skip-link" href="#main">跳到主要内容</a>
    <Nav />
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title"><span>有些话，</span><span>不必一个人扛着。</span></h1>
          <p className="hero-intro">西南政法大学的学生成长支持谈话室。这里不要求你立刻想清楚一切；如果你愿意，我们可以坐下来，慢慢谈。</p>
          <div className="hero-actions"><a className="button primary" href="#about">了解谈话室</a><a className="button secondary" href="#contact">预约 / 联系</a></div>
          <a className="emergency-link" href="#emergency">现在需要更及时的支持？ <span>查看紧急支持</span></a>
        </div>
        <div className="sunroom" aria-label="温暖风格的校园插画与人物插画">
          <img className="campus-hero-image" src={campusIllustration} alt="温暖画风的校园林荫大道插画" />
          <div className="hero-portrait-card"><img src={homeCounselorIllustration} alt="胡老师谈话室人物插画" /></div>
          <p className="scene-caption">在校园里，为一段坦诚的谈话留一点空间。</p>
        </div>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <div className="section-heading about-heading"><h2 id="about-title">你不必独自理清所有事。</h2><p>有些困惑并不需要立刻得到答案；被认真听见，本身就是向前的一步。</p></div>
        <div className="about-layout"><figure className="portrait-placeholder"><img src={counselorIllustration} loading="lazy" alt="胡老师谈话室人物插画" /></figure><div className="about-copy"><p className="lead">胡老师是{site.role}，<strong>{site.experience}</strong>。</p><p>长期在学生一线工作，让她熟悉大学阶段里那些不容易被一句话说完的困惑：学业的压力、关系的拉扯、对未来的迟疑，以及想要好好长大的心情。</p><p>谈话不是替你下结论，而是在尊重和倾听中，陪你把杂乱的念头一点点理清，找到更适合自己的下一步。</p></div></div>
      </section>

      <section className="topics section" id="topics" aria-labelledby="topics-title">
        <div className="section-heading narrow"><h2 id="topics-title">你可以来聊什么</h2><p>你不需要先证明自己的问题足够严重，才值得被认真倾听。</p></div>
        <div className="topic-list">{topics.map(([title, text]) => <article className="topic" key={title}><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="moments section" aria-labelledby="moments-title">
        <div className="moments-visual"><img src={editorialPortrait} loading="lazy" alt="温暖画风的校园树影与湖畔插画" /><p>校园生活并不总是轻松的。<br />但你不必独自消化每一件事。</p></div>
        <div className="moments-content"><div className="section-heading"><h2 id="moments-title">也许，你正经历这样的时刻。</h2><p>这些不是任何人的个案，而是许多学生都会遇到的成长片段。</p></div><div className="moment-list">{moments.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="conversation section" id="conversation" aria-labelledby="conversation-title">
        <div className="section-heading inverse conversation-heading"><h2 id="conversation-title">一次谈话，会怎样开始？</h2><p>不要求你准备好。只要愿意来，我们就从当下开始。</p></div>
        <ol className="steps">{steps.map(([title, text], index) => <li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
        <div className="boundaries"><div><h3>关于隐私</h3><p>谈话会尊重你的隐私与个人边界。</p></div><div><h3>关于安全</h3><p>如涉及自身或他人安全等情况，会以保护安全为优先。</p></div><div><h3>关于支持范围</h3><p>本服务不替代医疗诊断或治疗；必要时会建议联系更合适的支持渠道。</p></div></div>
      </section>

      <section className="stories section" aria-labelledby="stories-title">
        <div className="stories-heading"><h2 id="stories-title"><span>有些改变，从有人陪你</span><span>把话说完开始。</span></h2></div>
        <div className="stories-grid"><div className="stories-image"><img src={editorialWide} loading="lazy" alt="温暖画风的校园湖畔与银杏插画" /></div><div className="story-list">{fictionalStories.map(([person, quote, text]) => <article key={person}><p className="story-person">{person}</p><blockquote>{quote}</blockquote><p>{text}</p></article>)}</div></div>
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-title">
        <div className="section-heading"><h2 id="contact-title">把见面约在合适的时候。</h2><p>服务仅面向本校学生。建议提前 2 天预约。</p></div>
        <div className="contact-grid"><div className="contact-details"><h3>联系胡老师</h3><a href={`tel:${site.phone}`} className="contact-value">{site.phone}</a><a href={`mailto:${site.email}`} className="contact-value email">{site.email}</a></div><div className="booking-card"><h3>选择一个合适的时段</h3><p>问卷仅用于预约安排。请勿填写详细个人经历或其他敏感内容；如果正在经历紧急危险，请不要等待预约。</p><a className="booking-link" href={site.bookingUrl} target="_blank" rel="noreferrer">打开预约问卷</a></div></div>
      </section>

      <section className="emergency" id="emergency" aria-labelledby="emergency-title"><div><h2 id="emergency-title">现在，安全比等待预约更重要。</h2></div><div><p>如果你正有伤害自己或他人的想法、无法保证自身安全，或正处于紧急危险，请不要等待预约。请立即联系身边可信赖的人、学校官方渠道、当地紧急服务，并尽快前往最近的医疗机构。</p></div></section>

      <section className="faq section" id="faq" aria-labelledby="faq-title"><div className="section-heading narrow"><h2 id="faq-title">常见问题</h2></div><div className="faq-layout"><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div><aside className="faq-aside"><img src={editorialPortrait} loading="lazy" alt="温暖画风的校园树影插画" /><div><h3>不必准备好，才可以开口。</h3><p>不确定要说什么也没关系。你可以从“我最近有点乱”开始。</p></div></aside></div></section>
    </main>
    <footer><p>“胡老师的聊天室”提供学生成长支持信息，不构成医疗诊断、治疗或紧急服务。</p></footer>
  </>
}

export default App
