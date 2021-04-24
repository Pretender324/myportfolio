import { Typography } from "antd"
import useSWR from "swr"
import { AtCoderHistory } from "../entities/atcoder"
import React from "react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from "recharts"

const fetcher = url => fetch(url).then(res => res.json())


function AtCoderColor({ rate }: { rate:number}) {
	let color = ""
	if (rate >= 2800) {
		color = "red"
	} else if (rate >= 2400) {
		color = "orange"
	} else if (rate >= 2000) {
		color = "yellow"
	} else if (rate >= 1600) {
		color = "blue"
	} else if (rate >= 1200) {
		color = "#00C0C0"
	} else if (rate >= 800) {
		color = "green"
	} else if (rate >= 400) {
		color = "brown"
	} else {
		color = "gray"
	}
	return <Typography.Text style={{color: color}}>{rate}</Typography.Text>
}

function AtCoderPlot({ history }: { history: AtCoderHistory[] }) {
	const data = []
	history.map((c) => {
		const d = {
			name: c.ContestName,
			rating: c.NewRating,
			date: c.EndTime
		}
		data.push(d)
	})
	


	return (
		<LineChart
			width={400}
			height={300}
			data={data}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<Tooltip />
			<XAxis hide dataKey="name" />
			<YAxis />
			<Line type="monotone" dataKey="rating" stroke="#8884d8" activeDot={{ r: 8 }} />
		</LineChart>
	)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function AtCoder() {
	const { data, error } = useSWR("/api/atcoder", fetcher)
	if (error) return <Typography.Text>An error has occurred.</Typography.Text>
	if (!data) return <Typography.Text>Loading...</Typography.Text>
	if (data != null) {
		console.log(data)
		const newestContestData: AtCoderHistory = data.slice(-1)[0]
		return (
			<>
				<Typography.Paragraph>Highest: <AtCoderColor rate={1249} /></Typography.Paragraph>
				<Typography.Paragraph>最新のコンテスト: {newestContestData.ContestName}
					<br></br>
        (Perf. <AtCoderColor rate={newestContestData.Performance}></AtCoderColor>)</Typography.Paragraph>
				<AtCoderPlot history={data}></AtCoderPlot>
			</>
		)
	}
}
