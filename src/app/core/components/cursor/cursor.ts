import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, NgZone } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [],
  templateUrl: './cursor.html',
  styleUrl: './cursor.scss',
})
export class Cursor implements AfterViewInit, OnDestroy {
  @ViewChild('cursor') cursorEl!: ElementRef<HTMLElement>;
  @ViewChild('follower') followerEl!: ElementRef<HTMLElement>;

  private mouseX = -100;
  private mouseY = -100;
  private followerX = -100;
  private followerY = -100;

  private reqId = 0;
  private mouseMoveListener!: (e: MouseEvent) => void;
  private mouseEnterListeners: Array<{ el: Element; enter: () => void; leave: () => void }> = [];

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.mouseMoveListener = (e: MouseEvent) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
      };

      window.addEventListener('mousemove', this.mouseMoveListener);
      this.attachHoverEffects();
      this.animate();
    });
  }

  private animate = () => {
    if (this.cursorEl?.nativeElement) {
      this.cursorEl.nativeElement.style.transform = `translate3d(${this.mouseX - 5}px, ${this.mouseY - 5}px, 0)`;
    }

    const lerpFactor = 0.12;
    this.followerX += (this.mouseX - this.followerX) * lerpFactor;
    this.followerY += (this.mouseY - this.followerY) * lerpFactor;

    if (this.followerEl?.nativeElement) {
      this.followerEl.nativeElement.style.transform = `translate3d(${this.followerX - 18}px, ${this.followerY - 18}px, 0)`;
    }

    this.reqId = requestAnimationFrame(this.animate);
  };

  private attachHoverEffects() {
    const applyHover = () => {
      // Ajout de input, textarea, select pour les effets de hover
      document.querySelectorAll('a, button, input, textarea, select, .menu-link, .cta-btn, .project-row').forEach(el => {
        if ((el as any)._hasCursorHover) return;
        (el as any)._hasCursorHover = true;

        const enter = () => document.body.classList.add('cursor-hover');
        const leave = () => document.body.classList.remove('cursor-hover');

        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
        this.mouseEnterListeners.push({ el, enter, leave });
      });
    };

    applyHover();

    const observer = new MutationObserver(() => applyHover());
    observer.observe(document.body, { childList: true, subtree: true });
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.reqId);
    window.removeEventListener('mousemove', this.mouseMoveListener);
    this.mouseEnterListeners.forEach(({ el, enter, leave }) => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    });
  }
}
