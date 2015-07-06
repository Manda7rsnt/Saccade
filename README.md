# Saccade
A component-based JS game engine built on top of Perlenspiel 3.


## entity
The base type of most of the interesting stuff in Saccade. Keeps track of its parent entity and any children.

Entities have methods which can be overridden to get access to various types of events, including touch/click, keyboard events, rendering, and the update loop.

## scene
A container for entities and the starting point for each project. Each scene runs its own update loop, which clears the scene's draw area, runs physics, child updates, and rendering.

## sprite
A type of entity characterized by a location and a physics presence.

## component
A mostly bare-bones entity which is typically used to extend the functionality of a sprite that it's attached to.
