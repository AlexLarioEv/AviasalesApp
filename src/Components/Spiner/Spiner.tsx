/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import './spiner.css'

const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />

const Spiner: React.FC = () => <Spin className="Spiner" indicator={antIcon} />

export default Spiner
