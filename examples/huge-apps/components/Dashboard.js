import React from 'react'
import { Link } from 'react-router'

const styles = {}

styles.table = {
  width: '100%',
  maxWidth: '100%',
  marginBottom: '20px',
  border: '1px solid #ddd',
  borderSpacing: '0',
  borderCollapse: 'collapse',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  fontFamily: '"Microsoft JhengHei", Helvetica, Arial, "lucida grande", tahoma, verdana, arial, sans-serif',
  fontSize: '14px'
}

styles.th = {
  border: '1px solid #ddd',
  verticalAlign: 'bottom',
  borderBottomWidth: '2px',
  padding: '8px',
  lineHeight: '1.42857143'
}

styles.tbth = {
  ...styles.th,
  borderBottomWidth: '1px',
}

styles.td = {
  border: '1px solid #ddd',
  verticalAlign: 'top',
  padding: '8px',
  lineHeight: '1.42857143'
}
styles.centertd = {
  ...styles.td,
  textAlign:"center"
}

class Dashboard extends React.Component {
  render() {
    const { courses } = this.props
    return (
      <div>
        <table style={styles.table}>
          <thead>
              <tr>
                  <th style={styles.th}>#</th>
                  <th style={styles.th}>First Name</th>
                  <th style={styles.th}>Last Name</th>
                  <th style={styles.th}>審核</th>
                  <th style={styles.th}>詳細</th>
              </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr>
                    <th key={course.id} style={styles.tbth}>
                      {course.id}
                    </th>
                    <td style={styles.td}>
                      {course.name}
                    </td>
                    <td style={styles.td}>
                      {course.title}
                    </td>
                    <td style={styles.centertd}>
                      {course.grade}&nbsp;<a href="#"><i className="fa fa-fw fa-pencil"></i></a>
                    </td>
                    <td style={styles.centertd}>
                      <Link to={`/course/${course.id}`}>詳細</Link>
                    </td>
              </tr>
            ))}              
          </tbody>
        </table>
      </div>
    )
  }
}

export default Dashboard
