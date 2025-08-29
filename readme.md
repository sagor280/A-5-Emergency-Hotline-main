
 6. Answer the following questions clearly:

    ==>Question no-1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
        Answer: (i) getElementById :
                                    Selects an element by a specific id. Always returns a single element object.

              (ii) getElementsByClassName :
                                       Selects all elements that share the same class name. Returns a live HTMLCollection. 
                                       To use each element, you have to loop through it.

               (iii)querySelector :
                                  Uses a CSS selector to find an element. Returns only the first matching element.

               (iv) querySelectorAll :
                                  Finds all elements that match a CSS selector. Returns a static NodeList.



         ==>Question no-2. How do you **create and insert a new element into the DOM**?
            Answer: To create and insert a new element into the DOM we usually follow 3 steps:

                      (i)Create the element using document.createElement().

                       (ii)Add content or attributes (like text, class, id etc.).

                       (iii)Insert the element into the DOM using methods like appendChild() or append().
          ==>Question no-3. What is **Event Bubbling** and how does it work?
                    Answer : Event Bubbling means when an event is triggered on a particular element, it does not stop there. 
                    Instead, the event propagates upward through its parent, then grandparent, 
                    and continues until it reaches the root.


     ==>Question no-4. What is **Event Delegation** in JavaScript? Why is it useful?
        Answer: Event Delegation is a technique in JavaScript where instead of adding event listeners to multiple
         child elements individually, you attach a single event listener to their parent element. 
         The parent then handles events for its children using the event’s bubbling behavior.
                 Why it is useful:
                     (i)Less code: You don’t need to attach listeners to every single child element.
                    (ii)Dynamic elements: Works for elements added to the DOM later (after page load).
                    (iii)Better performance: Reduces the number of event listeners, improving efficiency.


    ==> Question no-5. What is the difference between **preventDefault() and stopPropagation()** methods?
        Answer:
        (i)preventDefault() - The purpose is stops the default browser behavior of an 
        element without stopping the event itself. But It does not stop the event from bubbling.
        (ii)stopPropagation() - The purpose is stops the event from bubbling up to parent elements.

