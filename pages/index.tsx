import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Link href="/">トップへ | </Link>
          <Link href="/todoList">TODO | </Link>
          <Link href="/monthly">月間表示へ</Link>
        </div>


        <div>
          [説明]
          <p>
            Time-TODOは日々のタスク消費時間を手軽に計測できるサービスです。
            使い方は日々のタスクを登録してタスク開始時にstartボタン、タスク完了時にstopボタンをクリックするだけです。
            例えば英語の勉強というタスクの場合、英語の勉強のタスク開始時にstartボタンをクリックして完了時にstopボタンを押すだけです。
            毎日のタスクは自動で計測され月別に可視化されます。
          </p>
          <button><Link href="/todo">使ってみる</Link> </button>
        </div>

        <div>
          [サインアップ・サインイン]
          <p>
            未登録でも3ヶ月までのデータを保存できます。
            サインアップすることで3ヶ月以上のデータを保存することができます。
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
