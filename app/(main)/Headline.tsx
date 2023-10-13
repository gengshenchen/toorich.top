'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon, UserSecurityIcon } from '~/assets'
//import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
      {/* <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" /> */}
      <span className="font-mono">软件工程师</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

// function Designer() {
//   return (
//     <span className="group relative rounded-2xl bg-black/5 p-1 dark:bg-white/5">
//       <span className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
//         <span className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
//         <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
//         <span className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
//         <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
//       </span>
//       C++
//     </span>
//   )
// }

function OCD() {
  return (
    <span className="group">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span></span>
    </span>
  )
}

// function Founder() {
//   return (
//     <span className="group">
//       <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
//       <span>创始人</span>
//     </span>
//   )
// }

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />
        {/* <Designer /> */}
        {/* <br /> */}
        <OCD />
        {/* <Founder /> */}
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          我是 karl，热爱摇滚乐，热爱编程技术，憎恨一切价值观低下的产物。
          认真负责，对代码质量有追求。喜好钻研，向往自由，普普通通的人。
          {/* <PeekabooLink href="https://toorich.top">toorich</PeekabooLink> */}

        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://twitter.com/gengshenchen"
          aria-label="我的推特"
          platform="twitter"
        />
        {/* <SocialLink
          href="https://cali.so/youtube"
          aria-label="我的 YouTube"
          platform="youtube"
        />
        <SocialLink
          href="https://cali.so/bilibili"
          aria-label="我的 Bilibili"
          platform="bilibili"
        /> */}
        <SocialLink
          href="https://github.com/gengshenchen"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://t.me/gengshenchen"
          aria-label="我的 Telegram"
          platform="telegram"
        />
        {/* <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" /> */}
        <SocialLink
          href="mailto:chengengshen@toorich.top"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
