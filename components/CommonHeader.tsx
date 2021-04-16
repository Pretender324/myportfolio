import { Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import Link from 'next/link'

export function CommonHeader() {
    return (
        <Header className="">
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1"><Link href="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link href="/about-me">About Me</Link></Menu.Item>
                <Menu.Item key="3"><Link href="/skill-set">Skill Set</Link></Menu.Item>
            </Menu>
        </Header>
    )
}