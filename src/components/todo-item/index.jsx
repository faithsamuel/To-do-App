import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

function TodoItem({todo, fetchTodoDetails}) {
    console.log(todo)
  return (
    <Card
        sx={{
            maxWidth: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}
    >
        <CardContent>
            <Typography variant="h5" color={'text.secondary'}>
            {todo?.todo}
            </Typography>
        </CardContent>
        
        <CardActions>
            <Button
            onClick={()=>fetchTodoDetails(todo?.id)}
            sx={{
                backgroundColor: '#000000',
                color: '#fff',
                opacity: '0.75',
                '&:hover' : {
                    backgroundColor: '#000',
                    color: '#fff',
                    opacity: '1',
                }

            }}>
                 Details
            </Button>
        </CardActions>
    </Card>
    
  )
}

export default TodoItem
