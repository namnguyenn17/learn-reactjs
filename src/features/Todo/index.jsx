import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import NotFound from '../../components/NotFound'
import DetailPage from './pages/DetailPage'
import ListPage from './pages/ListPage'

TodoFeature.propTypes = {}

function TodoFeature(props) {
  const match = useRouteMatch()

  return (
    <div>
      TODO SHARED UI
      <Switch>
        <Route exact path={match.path} component={ListPage} />
        <Route exact path={`${match.path}/:todoId`} component={DetailPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default TodoFeature
