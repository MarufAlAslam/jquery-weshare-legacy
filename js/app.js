// Multi-step form functionality
$(document).ready(function() {
    let currentStep = 1;
    const totalSteps = 4;

    // Initialize - show step 1
    $('#step-1').addClass('active');

    // Function to show specific step
    function showStep(stepNumber) {
        // Hide all steps
        $('.step').removeClass('active');
        
        // Show the target step
        if (stepNumber <= totalSteps) {
            $(`#step-${stepNumber}`).addClass('active');
        } else if (stepNumber === 5) {
            // Show thank you page
            $('#thank-you').addClass('active');
        }
        
        currentStep = stepNumber;
    }

    // Handle "Get Started" buttons in step 1
    $('#step-1 form').on('submit', function(e) {
        e.preventDefault();
        showStep(2);
    });

    // Handle "Continue" button in step 2
    $('#step-2 form').on('submit', function(e) {
        e.preventDefault();
        showStep(3);
    });

    // Handle "Continue" button in step 3
    $('#step-3 form').on('submit', function(e) {
        e.preventDefault();
        showStep(4);
    });

    // Handle "Submit" button in step 4
    $('#step-4 form').on('submit', function(e) {
        e.preventDefault();
        showStep(5);
    });

    // Handle the second "Get Started" form at the bottom of step 1
    $('#step-1 .form-again form').on('submit', function(e) {
        e.preventDefault();
        showStep(2);
    });
});