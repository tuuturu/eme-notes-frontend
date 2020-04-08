import Vue from 'vue'
import VueRouter from 'vue-router'

import Note from '@/views/Note'
import NoteList from '@/views/NoteList'

Vue.use(VueRouter)

const routes = [
	{
		path: '/all',
		name: 'NoteList',
		component: NoteList
	},
	{
		path: '/new',
		name: 'CreateNote',
		component: Note
	},
	{
		path: '/:id',
		name: 'EditNote',
		component: Note
	},
	{
		path: '/',
		name: 'LatestNote',
		component: Note
	}
]

const router = new VueRouter({
	routes
})

export default router
