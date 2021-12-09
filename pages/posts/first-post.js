/*
 * @Title: your project
 * @Author: huangjitao
 * @Date: 2021-11-02 16:56:31
 * @Description: description of this file
 */


import styles from '../../styles/FirstPost.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { useState } from 'react'
import { Button } from 'antd'

export default function FirstPost() {
  const [num, setNum] = useState(0)
  return (
    <Layout>
      <Head>
        <h1 className={styles.title}>First Post</h1>
      </Head>
      <p>数字：{num}</p>
      <Button type="primary" onClick={() => {setNum(num + 1)}}>增加</Button>
    </Layout>
  )
}