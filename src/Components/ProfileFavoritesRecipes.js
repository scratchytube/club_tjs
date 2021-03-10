import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRecipeNote, deleteFavRecipes } from '../Components/redux/fav_recipe'
// Bootstrap
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProfileFavoritesRecipes = ({ recipes }) => {
    const { title, image, ingredients, directions } = recipes.recipe
    const { id, note } = recipes
    const [showDirections, setShowDirections] = useState(false)
    const [toggleNote, setToggleNote] = useState(false)
    const [commentForRecipe, setCommentForRecipe] = useState("")
    const dispatch = useDispatch()

    const toggleFavRecipeDirections = () => {
        setShowDirections((showDirections) => !showDirections)
    }

    const handleRemoveRecFavorite =() => {
        fetch(`http://localhost:3000/api/v1/fav_recipes/${id}`, {
            method: 'DELETE',
        })
            .then((r) => r.json())
            .then((recipeToDelete) => {
                dispatch(deleteFavRecipes(recipeToDelete))
            })

    }

    const handleNoteComment = (e) => {
        e.preventDefault()

        fetch(`http://localhost:3000/api/v1/fav_recipes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({note: commentForRecipe})
        })
        .then((r) => r.json())
        .then(updatedRecipe => {
            dispatch(addRecipeNote(updatedRecipe))
        })
        setToggleNote((toggleNote) => !toggleNote)

    }

    const toggleTheNote = () => {
        setToggleNote((toggleNote) => !toggleNote)
    }
    

    return (
        <Col className="col-md-12 mt-5">
            <Card>
            <Card.Header>{title}</Card.Header>
            <Card.Img src={image} alt={title}/>
            <p>{note}</p> 
            {toggleNote ? 
            <div>
                <form onSubmit={handleNoteComment}>
                    <textarea name="note" placeholder={commentForRecipe} value={commentForRecipe} onChange={(e) => setCommentForRecipe(e.target.value)}/>
                </form>
                <button name="saveButton" type="submit" onClick={handleNoteComment}>Save</button>
            </div>
            : null }
            <h5>{ingredients}</h5>
            { showDirections ? (<p>{directions}</p>) : (null)}
            <button onClick={toggleFavRecipeDirections}> {showDirections ? ("Close Directions") : ("Show Directions")}</button>
            <button onClick={toggleTheNote} >{toggleNote ? "Eh nevermind" : "Note to Self"}</button>
            <button onClick={handleRemoveRecFavorite} >This ain't no favorite of mine</button>
            </Card>
        </Col>
    )
}

export default ProfileFavoritesRecipes