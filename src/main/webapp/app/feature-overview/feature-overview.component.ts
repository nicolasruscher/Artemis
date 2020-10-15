import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'jhi-feature-overview',
    templateUrl: './feature-overview.component.html',
    styleUrls: ['./feature-overview.scss'],
})
export class FeatureOverviewComponent implements OnInit {
    features: Feature[];
    targetAudience = TargetAudience.INSTRUCTORS;

    constructor(private route: ActivatedRoute) {}

    /**
     * Initialises the feature overview page either for students or for instructors, depending on the url.
     * Sets up the features to be displayed
     */
    ngOnInit(): void {
        if (this.route.snapshot.url[0]?.toString() === 'students') {
            this.targetAudience = TargetAudience.STUDENTS;
        }

        if (this.targetAudience === TargetAudience.INSTRUCTORS) {
            this.setupInstructorFeatures();
        } else {
            this.setupStudentFeatures();
        }
    }

    private setupStudentFeatures() {
        // set up student features
        const featurelocalIDE = new Feature(
            'featureOverview.students.feature.localIDE.title',
            'featureOverview.students.feature.localIDE.shortDescription',
            'featureOverview.students.feature.localIDE.descriptionTextOne',
            'fa fa-code-fork',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/students/clone_repository.png?raw=true',
        );
        featurelocalIDE.centerTextAndImageOne();

        const featureCodeEditor = new Feature(
            'featureOverview.students.feature.codeEditor.title',
            'featureOverview.students.feature.codeEditor.shortDescription',
            'featureOverview.students.feature.codeEditor.descriptionTextOne',
            'fa fa-code',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/students/code_editor.png?raw=true',
        );

        const featureTextEditor = new Feature(
            'featureOverview.students.feature.textEditor.title',
            'featureOverview.students.feature.textEditor.shortDescription',
            'featureOverview.students.feature.textEditor.descriptionTextOne',
            'fa fa-file-text',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/students/text_editor.png?raw=true',
        );
        featureTextEditor.centerTextAndImageOne();

        const featureapollonEditor = new Feature(
            'featureOverview.students.feature.apollonEditor.title',
            'featureOverview.students.feature.apollonEditor.shortDescription',
            'featureOverview.students.feature.apollonEditor.descriptionTextOne',
            'fa fa-object-group',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/students/modeling_editor.png?raw=true',
        );

        const featureQuizExercises = new Feature(
            'featureOverview.students.feature.quizExercises.title',
            'featureOverview.students.feature.quizExercises.shortDescription',
            'featureOverview.students.feature.quizExercises.descriptionTextOne',
            'fa fa-check-square-o',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/students/quiz_exercises.png?raw=true',
        );
        featureQuizExercises.alignFirstImageLeft();

        const featureLogin = new Feature(
            'featureOverview.students.feature.login.title',
            'featureOverview.students.feature.login.shortDescription',
            'featureOverview.students.feature.login.descriptionTextOne',
            'fa fa-sign-in',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/students/login.png?raw=true',
        );
        featureLogin.centerAndShrinkImage();

        const featureUserInterface = new Feature(
            'featureOverview.students.feature.userInterface.title',
            'featureOverview.students.feature.userInterface.shortDescription',
            'featureOverview.students.feature.userInterface.descriptionTextOne',
            'fa fa-puzzle-piece',
            'featureOverview.students.feature.userInterface.descriptionTextTwo',
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/students/user_interface.png?raw=true',
        );

        const featureConduction = new Feature(
            'featureOverview.students.feature.conduction.title',
            'featureOverview.students.feature.conduction.shortDescription',
            'featureOverview.students.feature.conduction.descriptionTextOne',
            'fa fa-play',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/students/online_exams.png?raw=true',
        );
        featureConduction.centerAndExpandImage();

        const featureSummary = new Feature(
            'featureOverview.students.feature.summary.title',
            'featureOverview.students.feature.summary.shortDescription',
            'featureOverview.students.feature.summary.descriptionTextOne',
            'fa fa-th-list',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/students/summary.png?raw=true',
        );

        const featureQualityAndFair = new Feature(
            'featureOverview.students.feature.qualityAndFair.title',
            'featureOverview.students.feature.qualityAndFair.shortDescription',
            'featureOverview.students.feature.qualityAndFair.descriptionTextOne',
            'fa fa-superpowers',
        );

        const featureOnlineReview = new Feature(
            'featureOverview.students.feature.onlineReview.title',
            'featureOverview.students.feature.onlineReview.shortDescription',
            'featureOverview.students.feature.onlineReview.descriptionTextOne',
            'fa fa-comment-o',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/students/complaint.png?raw=true',
        );

        const featureBrowserCompatibility = new Feature(
            'featureOverview.students.feature.browserCompatibility.title',
            'featureOverview.students.feature.browserCompatibility.shortDescription',
            'featureOverview.students.feature.browserCompatibility.descriptionTextOne',
            'fa fa-chrome',
            undefined,
        );
        featureBrowserCompatibility.centerTextAndImageOne();

        this.features = [
            featureConduction,
            featureUserInterface,
            featureCodeEditor,
            featurelocalIDE,
            featureapollonEditor,
            featureTextEditor,
            featureQuizExercises,
            featureSummary,
            featureQualityAndFair,
            featureOnlineReview,
            featureLogin,
            featureBrowserCompatibility,
        ];
    }

    private setupInstructorFeatures() {
        // Set up instructor features
        const featureCreateConductAssess = new Feature(
            'featureOverview.instructor.feature.createConductAssess.title',
            'featureOverview.instructor.feature.createConductAssess.shortDescription',
            'featureOverview.instructor.feature.createConductAssess.descriptionTextOne',
            'fa fa-cubes',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/instructors/create_conduct_assess.png?raw=true',
        );
        featureCreateConductAssess.centerAndExpandImage();

        const featureConfiguration = new Feature(
            'featureOverview.instructor.feature.configuration.title',
            'featureOverview.instructor.feature.configuration.shortDescription',
            'featureOverview.instructor.feature.configuration.descriptionTextOne',
            'fa fa-cogs',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/instructors/import_students.png?raw=true',
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/instructors/fully_configurable.png?raw=true',
        );

        const featureExerciseTypes = new Feature(
            'featureOverview.instructor.feature.exerciseTypes.title',
            'featureOverview.instructor.feature.exerciseTypes.shortDescription',
            'featureOverview.instructor.feature.exerciseTypes.descriptionTextOne',
            'fa fa-tasks',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/instructors/multiple_exercises.png?raw=true',
        );
        featureExerciseTypes.alignFirstImageLeft();

        const featureExerciseVariants = new Feature(
            'featureOverview.instructor.feature.exerciseVariants.title',
            'featureOverview.instructor.feature.exerciseVariants.shortDescription',
            'featureOverview.instructor.feature.exerciseVariants.descriptionTextOne',
            'fa fa-files-o',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/instructors/exercise_variants.png?raw=true',
        );
        featureExerciseVariants.centerTextAndImageOne();

        const featureTestRuns = new Feature(
            'featureOverview.instructor.feature.testRunConduction.title',
            'featureOverview.instructor.feature.testRunConduction.shortDescription',
            'featureOverview.instructor.feature.testRunConduction.descriptionTextOne',
            'fa fa-tasks',
            undefined,
        );

        const featureSessionMonitoring = new Feature(
            'featureOverview.instructor.feature.sessionMonitoring.title',
            'featureOverview.instructor.feature.sessionMonitoring.shortDescription',
            'featureOverview.instructor.feature.sessionMonitoring.descriptionTextOne',
            'fa fa-hdd-o',
        );

        const featurePlagiarismDetection = new Feature(
            'featureOverview.instructor.feature.plagiarismDetection.title',
            'featureOverview.instructor.feature.plagiarismDetection.shortDescription',
            'featureOverview.instructor.feature.plagiarismDetection.descriptionTextOne',
            'fa fa-user-secret',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public' + '/images/feature-overview/instructors/plagiarism.png?raw=true',
        );

        const featureAnonymousAssessment = new Feature(
            'featureOverview.instructor.feature.anonymousAssessment.title',
            'featureOverview.instructor.feature.anonymousAssessment.shortDescription',
            'featureOverview.instructor.feature.anonymousAssessment.descriptionTextOne',
            'fa fa-shield',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public' +
                '/images/feature-overview/instructors/anonymous_assessment.png?raw=true',
        );

        const featureAutomaticAssessment = new Feature(
            'featureOverview.instructor.feature.automaticAssessment.title',
            'featureOverview.instructor.feature.automaticAssessment.shortDescription',
            'featureOverview.instructor.feature.automaticAssessment.descriptionTextOne',
            'fa fa-magic',
            undefined,
        );

        const featureAssessmentMonitoring = new Feature(
            'featureOverview.instructor.feature.assessmentMonitoring.title',
            'featureOverview.instructor.feature.assessmentMonitoring.shortDescription',
            'featureOverview.instructor.feature.assessmentMonitoring.descriptionTextOne',
            'fa fa-microchip',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/instructors/progress_monitoring.png?raw=true',
        );
        featureAssessmentMonitoring.alignFirstImageLeft();

        const featureComplaints = new Feature(
            'featureOverview.instructor.feature.complaints.title',
            'featureOverview.instructor.feature.complaints.shortDescription',
            'featureOverview.instructor.feature.complaints.descriptionTextOne',
            'fa fa-question',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/instructors/complaint_response.png?raw=true',
        );
        featureComplaints.alignFirstImageLeft();

        const featureStatistics = new Feature(
            'featureOverview.instructor.feature.statistics.title',
            'featureOverview.instructor.feature.statistics.shortDescription',
            'featureOverview.instructor.feature.statistics.descriptionTextOne',
            'fa fa-pie-chart',
            undefined,
            'https://github.com/ls1intum/Artemis/blob/feature/informative-marketing/src/main/resources/public/images/feature-overview/instructors/exam_statistics.png?raw=true',
        );
        this.features = [
            featureCreateConductAssess,
            featureConfiguration,
            featureExerciseTypes,
            featureExerciseVariants,
            featureTestRuns,
            featureSessionMonitoring,
            featurePlagiarismDetection,
            featureAnonymousAssessment,
            featureAutomaticAssessment,
            featureAssessmentMonitoring,
            featureComplaints,
            featureStatistics,
        ];
    }

    navigateToFeature(featureId: string): void {
        // get html element for feature
        const element = document.getElementById('feature' + featureId);
        if (element) {
            // scroll to correct y
            const y = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
}

export enum TargetAudience {
    INSTRUCTORS = 'instructor',
    STUDENTS = 'students',
}

class Feature {
    title: string;
    shortDescription: string;
    descriptionTextOne: string;
    centered = false;
    expandedImage = false;
    shrinkedImage = false;
    descriptionTextTwo?: string;
    imageOne?: string;
    imageTwo?: string;
    firstImageLeft = false;
    icon: string;
    id: string;

    constructor(title: string, shortDescription: string, descriptionTextOne: string, icon: string, descriptionTextTwo?: string, imageOne?: string, imageTwo?: string) {
        this.title = title;
        this.shortDescription = shortDescription;
        this.descriptionTextOne = descriptionTextOne;
        this.descriptionTextTwo = descriptionTextTwo;
        this.imageOne = imageOne;
        this.imageTwo = imageTwo;
        this.icon = icon;
        this.id = this.setId();
    }

    /**
     * Math.random should be unique because of its seeding algorithm.
     * Convert it to base 36 (numbers + letters), and grab the first 9 characters after the decimal.
     * @private
     */
    setId(): string {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    /**
     * Centers the text and first image.
     * Note: Only has an effect if there is no second text
     */
    centerTextAndImageOne(): void {
        this.centered = true;
    }

    /**
     * Centers the text and first image.
     * Note: Only has an effect if there is no second text
     */
    centerAndExpandImage(): void {
        this.centered = true;
        this.expandedImage = true;
    }

    /**
     * Centers the text and first image.
     * Note: Only has an effect if there is no second text
     */
    centerAndShrinkImage(): void {
        this.centered = true;
        this.shrinkedImage = true;
    }

    /**
     * Align the first image to the left, instead of the right
     */
    alignFirstImageLeft() {
        this.firstImageLeft = true;
    }
}
