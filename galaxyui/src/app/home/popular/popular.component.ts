import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ContentTypes } from '../../enums/content-types.enum';

import { EventLoggerService } from '../../resources/logger/event-logger.service';

class Category {
    name: string;
    iconClass: string;
}

@Component({
    selector: 'popular-component',
    templateUrl: './popular.component.html',
    styleUrls: ['./popular.component.less'],
})
export class PopularComponent implements OnInit {
    // Used to track which component is being loaded
    componentName = 'PopularComponent';

    categories: Category[] = [];

    constructor(private router: Router, private logger: EventLoggerService) {}

    ngOnInit() {
        this.categories = [
            {
                name: 'System',
                iconClass: 'fa fa-desktop',
            },
            {
                name: 'Development',
                iconClass: 'fa fa-code',
            },
            {
                name: 'Networking',
                iconClass: 'fa fa-sitemap',
            },
            {
                name: 'Cloud',
                iconClass: 'fa fa-cloud-upload',
            },
            {
                name: 'Database',
                iconClass: 'fa fa-database',
            },
            {
                name: 'Monitoring',
                iconClass: 'fa fa-bar-chart',
            },
            {
                name: 'Packaging',
                iconClass: 'fa fa-cube',
            },
            {
                name: 'Playbook Bundles',
                iconClass: 'pficon-bundle',
            },
            {
                name: 'Security',
                iconClass: 'fa fa-lock',
            },
            {
                name: 'Web',
                iconClass: 'fa fa-globe',
            },
        ] as Category[];
    }

    handleCategoryClick(category: Category) {
        const params = {};
        params['deprecated'] = 'false';
        this.logger.logLink('Most Popular: ' + category.name, '/search');
        if (category.name === 'Playbook Bundles') {
            params['content_type'] = ContentTypes.apb;
        } else {
            params['tags'] = category.name.toLowerCase();
        }
        this.router.navigate(['/', 'search'], { queryParams: params });
    }
}
