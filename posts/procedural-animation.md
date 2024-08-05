---
title: 'Giving Personality to Procedural Animations using Math'
date: '2024-08-06'
---

When bored or I find myself lacking in my own ideas, I often look to what others are doing and play around with it to see what I can learn and if it might be of use to myself. Recently, I stumbled upon the video "Giving Personality to Procedural Animations using Math" and found some interesting concepts worth experimenting with.

### Using Sine and Cosine for Smooth Movements

To create smooth oscillating movements, use the **sine** function for vertical displacement. This produces a smooth, wave-like motion. 

**Example:**

    import numpy as np
    import matplotlib.pyplot as plt

    # parameters for smooth oscillating movement
    amplitude = 50
    frequency = 0.1
    time = np.linspace(0, 10, 1000)

    # sine wave function for vertical displacement
    y = amplitude * np.sin(frequency * time)

    # plotting the sine wave
    plt.plot(time, y)
    plt.title('smooth oscillating movement')
    plt.xlabel('time')
    plt.ylabel('displacement')
    plt.show()


### Adding Randomness for Natural Feel

Introducing random values to the displacement creates a more natural and organic feel to the animation. It simulates the small imperfections found in real-world movements.

**Example:**

    ```python
    import random

    # function to add randomness
    def random_range(min_val, max_val):
        return random.uniform(min_val, max_val)

    # random displacement values
    random_displacements = [random_range(-10, 10) for _ in range(len(time))]
    y_random = y + random_displacements

    # plotting the randomized movement
    plt.plot(time, y_random)
    plt.title('natural feel with randomness')
    plt.xlabel('time')
    plt.ylabel('displacement')
    plt.show()
    ```

### Combining Multiple Functions for Complex Motion

By combining **sine** and **cosine** functions, you can create complex motions like circular paths. This adds more depth and variety to your animations.

**Example:**

    ```python
    # circular motion using sine and cosine functions
    radius = 30
    x = radius * np.cos(frequency * time)
    y = radius * np.sin(frequency * time)

    # plotting the circular motion
    plt.plot(x, y)
    plt.title('complex circular motion')
    plt.xlabel('x displacement')
    plt.ylabel('y displacement')
    plt.axis('equal')
    plt.show()
    ```

### Controlling Speed and Acceleration with Easing Functions

Easing functions help in creating animations that start and stop smoothly. They enhance the overall user experience by making movements feel more natural and less abrupt.

**Example:**

    ```python
    # easing function for smooth start and stop
    def ease_in_out_quad(t):
        return 2 * t * t if t < 0.5 else -1 + (4 - 2 * t) * t

    duration = 2000  # duration of the animation in milliseconds
    time = np.linspace(0, 1, 1000)
    progress = (time % duration) / duration
    eased_progress = np.array([ease_in_out_quad(p) for p in progress])
    x = 100 * eased_progress

    # plotting the eased movement
    plt.plot(time, x)
    plt.title('eased movement')
    plt.xlabel('normalized time')
    plt.ylabel('displacement')
    plt.show()
    ```

### Conclusion

By playing around with these mathematical techniques, you can create procedural animations that feel dynamic and full of personality. Experiment with different functions and parameters to achieve the desired effect and see how they might be useful in your own projects.
