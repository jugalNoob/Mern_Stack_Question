
import fs from 'node:fs'
import EventEmitter from 'node:events'


const emitter=new EventEmitter()


const eventcount={
    'user-login':0,
    'user-Buy':0,
    'user-profile':0,
    'user-logout':0
}




emitter.on('user-login' , (username)=>{
eventcount['user-login']++
    console.log(`${username} logged in!`)
})


emitter.on('summary' , ()=>{
    console.log(eventcount)
})

emitter.emit('user-login' , 'jugal sharma')
emitter.emit('user-login' , 'karan sharma')
emitter.emit('user-login' , 'anku sharma')
emitter.emit('user-Buy' , 'jugal Lapato')
emitter.emit('user-profile' , 'jugal sharma')
emitter.emit('user-logout' , 'jugal sharma')
emitter.emit('summary')