document.addEventListener('DOMContentLoaded', function () {
    // Initialize form validation and step navigation
    initFluentFormSteps();
});

/**
 * Initialize the form validation and step navigation for Fluent Form
 */
function initFluentFormSteps() {
    // Find the form
    const form = document.querySelector('form.fluentform[data-form_id="90"]');

    if (!form) {
        console.error('Fluent Form with ID 90 not found');
        return;
    }

    // Get all steps in the form
    const steps = form.querySelectorAll('.ff-step-container');
    if (steps.length === 0) {
        console.error('No steps found in the form');
        return;
    }

    // Create step navigation in the left panel if it exists
    createStepNavigation(steps);

    // Track current step
    let currentStepIndex = 0;
    updateStepIndicator(currentStepIndex);

    // Find next and previous buttons
    const nextButtons = form.querySelectorAll('.ff-btn-next');
    const prevButtons = form.querySelectorAll('.ff-btn-prev');

    // Add listeners to next buttons
    nextButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            // Get the current step container
            const currentStep = button.closest('.ff-step-container');
            const stepIndex = Array.from(steps).indexOf(currentStep);

            // Validate only fields in the current step
            if (!isStepValid(currentStep)) {
                event.preventDefault();
                event.stopPropagation();
                alert('Please fill in all required fields in this step before continuing.');
                highlightEmptyFieldsInStep(currentStep);
                return false;
            }

            // If validation passes, update the step indicator
            if (stepIndex < steps.length - 1) {
                currentStepIndex = stepIndex + 1;
                updateStepIndicator(currentStepIndex);
            }
        });
    });

    // Add listeners to prev buttons
    prevButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the current step container
            const currentStep = button.closest('.ff-step-container');
            const stepIndex = Array.from(steps).indexOf(currentStep);

            if (stepIndex > 0) {
                currentStepIndex = stepIndex - 1;
                updateStepIndicator(currentStepIndex);
            }
        });
    });

    // Add listener to the form submission
    form.addEventListener('submit', function (event) {
        if (!isFluentFormValid()) {
            // Prevent form submission if validation fails
            event.preventDefault();
            event.stopPropagation();

            // Alert the user
            alert('Please fill in all required fields before submitting the form.');

            // Find which step has errors
            const stepWithError = findStepWithErrors();
            if (stepWithError !== -1) {
                // Switch to that step
                goToStep(stepWithError);
                // Highlight fields in that step
                highlightEmptyFieldsInStep(steps[stepWithError]);
            }
        }
    });
}

/**
 * Creates step navigation in the left panel
 * @param {NodeList} steps - The step containers
 */
function createStepNavigation(steps) {
    // Find the left panel container - Customize this selector to match your left panel
    const leftPanel = document.querySelector('.steps-navigation-panel');

    if (!leftPanel) {
        console.error('Left navigation panel not found');
        return;
    }

    // Clear existing content
    leftPanel.innerHTML = '';

    // Create navigation items
    const navList = document.createElement('ul');
    navList.className = 'steps-nav-list';

    // Add steps to the navigation
    Array.from(steps).forEach((step, index) => {
        // Try to get step title
        let stepTitle = `Step ${index + 1}`;

        // Look for a title element in the step
        const titleElement = step.querySelector('.ff-step-title');
        if (titleElement) {
            stepTitle = titleElement.textContent.trim();
        }

        // Create list item
        const listItem = document.createElement('li');
        listItem.className = 'step-nav-item';
        listItem.setAttribute('data-step', index);

        // Create the step button
        const stepButton = document.createElement('button');
        stepButton.className = 'step-nav-button';
        stepButton.textContent = stepTitle;

        // Add click handler to navigate to this step
        stepButton.addEventListener('click', function () {
            if (canGoToStep(index)) {
                goToStep(index);
            } else {
                alert('Please complete the current step before skipping ahead.');
            }
        });

        listItem.appendChild(stepButton);
        navList.appendChild(listItem);
    });

    leftPanel.appendChild(navList);
}

/**
 * Updates the step indicator in the left panel
 * @param {number} currentIndex - The current step index
 */
function updateStepIndicator(currentIndex) {
    // Find all step indicators
    const stepItems = document.querySelectorAll('.step-nav-item');

    stepItems.forEach((item, index) => {
        // Remove all state classes
        item.classList.remove('active', 'completed', 'upcoming');

        if (index < currentIndex) {
            item.classList.add('completed');
        } else if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.add('upcoming');
        }
    });
}

/**
 * Checks if navigation to a specific step is allowed
 * @param {number} targetStepIndex - The index of the step to navigate to
 * @return {boolean} - Whether navigation is allowed
 */
function canGoToStep(targetStepIndex) {
    const form = document.querySelector('form.fluentform[data-form_id="90"]');
    const steps = form.querySelectorAll('.ff-step-container');

    // Get current visible step
    let currentStepIndex = 0;
    steps.forEach((step, index) => {
        if (!step.classList.contains('ff_step_hidden')) {
            currentStepIndex = index;
        }
    });

    // Allow going backward
    if (targetStepIndex < currentStepIndex) {
        return true;
    }

    // If trying to go forward, validate all previous steps
    for (let i = 0; i < targetStepIndex; i++) {
        if (!isStepValid(steps[i])) {
            return false;
        }
    }

    return true;
}

/**
 * Navigate to a specific step
 * @param {number} stepIndex - The index of the step to navigate to
 */
function goToStep(stepIndex) {
    const form = document.querySelector('form.fluentform[data-form_id="90"]');
    const steps = form.querySelectorAll('.ff-step-container');

    // Ensure the index is valid
    if (stepIndex < 0 || stepIndex >= steps.length) {
        return;
    }

    // Hide all steps
    steps.forEach(step => {
        step.classList.add('ff_step_hidden');
    });

    // Show the target step
    steps[stepIndex].classList.remove('ff_step_hidden');

    // Update the step indicator
    updateStepIndicator(stepIndex);

    // Scroll to the top of the form
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Find which step contains validation errors
 * @return {number} - The index of the first step with errors, or -1 if none
 */
function findStepWithErrors() {
    const form = document.querySelector('form.fluentform[data-form_id="90"]');
    const steps = form.querySelectorAll('.ff-step-container');

    for (let i = 0; i < steps.length; i++) {
        if (!isStepValid(steps[i])) {
            return i;
        }
    }

    return -1;
}

/**
 * Validates all required fields in a specific step
 * @param {HTMLElement} stepContainer - The step container element
 * @return {boolean} - Whether all required fields in the step are valid
 */
function isStepValid(stepContainer) {
    // Get all required elements in this step
    const requiredElements = stepContainer.querySelectorAll('.ff-el-form-control[data-required="yes"], .ff-el-form-control[required]');

    // Check each required element
    for (const element of requiredElements) {
        // Skip elements that should be ignored
        if (element.hasAttribute('disabled') ||
            element.type === 'hidden' ||
            element.type === 'button' ||
            element.type === 'submit') {
            continue;
        }

        // Check different types of inputs
        if (element.type === 'checkbox' || element.type === 'radio') {
            // For checkboxes and radios, check if any in the group is checked
            const name = element.name;
            const form = element.closest('form');
            const checked = form.querySelectorAll(`input[name="${name}"]:checked`).length > 0;

            // If this is the first element in the group and none are checked, the field is empty
            if (!checked && form.querySelectorAll(`input[name="${name}"]`)[0] === element) {
                return false;
            }
        } else if (element.tagName === 'SELECT') {
            // For select elements, check if a non-empty option is selected
            if (element.value === '' || element.value === '-1' || element.value === 'default') {
                return false;
            }
        } else {
            // For text inputs, textareas, etc.
            if (element.value.trim() === '') {
                return false;
            }
        }
    }

    return true;
}

/**
 * Highlight empty required fields in a specific step
 * @param {HTMLElement} stepContainer - The step container element
 */
function highlightEmptyFieldsInStep(stepContainer) {
    const requiredElements = stepContainer.querySelectorAll('.ff-el-form-control[data-required="yes"], .ff-el-form-control[required]');

    let firstEmptyField = null;

    for (const element of requiredElements) {
        // Skip elements that should be ignored
        if (element.hasAttribute('disabled') ||
            element.type === 'hidden' ||
            element.type === 'button' ||
            element.type === 'submit') {
            continue;
        }

        let isEmpty = false;

        // Check different types of inputs
        if (element.type === 'checkbox' || element.type === 'radio') {
            const name = element.name;
            const form = element.closest('form');
            const checked = form.querySelectorAll(`input[name="${name}"]:checked`).length > 0;
            isEmpty = !checked && form.querySelectorAll(`input[name="${name}"]`)[0] === element;
        } else if (element.tagName === 'SELECT') {
            isEmpty = element.value === '' || element.value === '-1' || element.value === 'default';
        } else {
            isEmpty = element.value.trim() === '';
        }

        if (isEmpty) {
            // Get the parent container
            const container = element.closest('.ff-el-group');
            if (container) {
                // Add error class to container
                container.classList.add('has-error');

                // Store the first empty field
                if (!firstEmptyField) {
                    firstEmptyField = element;
                }
            }
        }
    }

    // Scroll to the first empty field
    if (firstEmptyField) {
        firstEmptyField.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Try to focus the element
        try {
            firstEmptyField.focus();
        } catch (e) {
            // Some elements might not be focusable
        }
    }
}

/**
 * Checks if all required fields in the Fluent Form are filled
 * @return {boolean} True if all required fields are filled, false otherwise
 */
function isFluentFormValid() {
    // Target the specific form with ID 90
    const form = document.querySelector('form.fluentform[data-form_id="90"]');

    if (!form) {
        console.error('Fluent Form with ID 90 not found');
        return false;
    }

    // Get all required input elements in the form
    const requiredElements = form.querySelectorAll('.ff-el-form-control[data-required="yes"], .ff-el-form-control[required]');

    // Check each required element
    for (const element of requiredElements) {
        // Skip elements that should be ignored
        if (element.hasAttribute('disabled') ||
            element.type === 'hidden' ||
            element.type === 'button' ||
            element.type === 'submit') {
            continue;
        }

        // Check different types of inputs
        if (element.type === 'checkbox' || element.type === 'radio') {
            // For checkboxes and radios, check if any in the group is checked
            const name = element.name;
            const checked = form.querySelectorAll(`input[name="${name}"]:checked`).length > 0;

            // If this is the first element in the group and none are checked, the field is empty
            if (!checked && form.querySelectorAll(`input[name="${name}"]`)[0] === element) {
                return false;
            }
        } else if (element.tagName === 'SELECT') {
            // For select elements, check if a non-empty option is selected
            if (element.value === '' || element.value === '-1' || element.value === 'default') {
                return false;
            }
        } else {
            // For text inputs, textareas, etc.
            if (element.value.trim() === '') {
                return false;
            }
        }
    }

    // If we got here, all required fields are filled
    return true;
}
