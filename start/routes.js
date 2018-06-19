'use strict'

const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/home', 'HomeController.index')
Route.get('/test', () => 'Hello World')

Route.get('/posts', 'PostController.index')

Route.get('/posts/add', 'PostController.add')
Route.get('/posts/edit/:id', 'PostController.edit')
Route.get('/posts/:id', 'PostController.details')
Route.post('/posts/store', 'PostController.store')
Route.put('/posts/update/:id', 'PostController.update')

Route.delete('/posts/:id', 'PostController.destroy')