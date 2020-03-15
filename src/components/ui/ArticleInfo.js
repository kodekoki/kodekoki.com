import React from 'react'
import { styleInfo } from './styles'
import BreadCrumb from './Breadcrumb'
import LabelInfo from './LabelInfo'
import { string, number } from 'prop-types'

const constant = {
  CREATED_AT: 'Dibuat pada',
  UPDATED_AT: 'Diperbarui pada',
  READ_TIME: 'Waktu baca',
  AUTHOR: 'Oleh',
}

const ArticleInfo = ({
  type = 'tips',
  date,
  modifiedDate,
  author,
  timeReading,
  modifiedDateFormatted,
  dateFormatted,
}) => (
  <div css={styleInfo}>
    {type && <BreadCrumb type={type} />}
    <LabelInfo
      field={constant.CREATED_AT}
      value={dateFormatted}
      isDate={date}
    />
    <LabelInfo
      field={constant.UPDATED_AT}
      value={modifiedDateFormatted || dateFormatted}
      isDate={modifiedDate || date}
    />
    <LabelInfo field={constant.READ_TIME} value={`${timeReading} menit`} />
    <LabelInfo field={constant.AUTHOR} value={author} />
  </div>
)

ArticleInfo.propTypes = {
  date: string,
  modifiedDate: string,
  dateFormatted: string,
  modifiedDateFormatted: string,
  type: string,
  author: string,
  timeReading: number,
}

export default ArticleInfo
