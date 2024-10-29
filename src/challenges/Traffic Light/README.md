# Traffic Light Application Task

## Description

Build a traffic light application where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:
- **Red light**: 4000ms
- **Yellow light**: 500ms
- **Green light**: 3000ms

You are free to exercise your creativity to style the appearance of the traffic light.

## HTML Structure (index.html)

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Traffic Light Simulation</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    <div id="root"></div>
    <script src="main.js" type="module"></script>
</body>
</html>
```

## CSS Styles (styles.css)

```css
body {
    font-family: sans-serif;
}

.wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.traffic-light-container {
    background-color: #000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
}

.traffic-light {
    --size: 60px;
    background-color: #555;
    border-radius: 50%;
    height: var(--size);
    width: var(--size);
    transition: background-color 0.3s ease;
}

.traffic-light--red {
    background-color: #f00;
}

.traffic-light--yellow {
    background-color: #ff0;
}

.traffic-light--green {
    background-color: #0f0;
}
```

## Instructions

1. **Create a new repository**: Please create a new Git repository to host this traffic light application.
2. **React Implementation**: Write a component that manages the switching of lights based on the durations provided above.

Feel free to add more creativity to the design, such as animations or additional visual effects.
