"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
}

export default function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
  const { t } = useTranslation()

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  const visiblePages = getVisiblePages()
  const createPageUrl = (page: number | string) => `/blog?page=${page}`

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
      <div className="text-sm text-gray-600">
        {t("blog.pageInfo")
          .replace("{current}", currentPage.toString())
          .replace("{total}", totalPages.toString())}
      </div>
      
      <div className="flex items-center space-x-1">
        {/* Previous Button - Desktop */}
        {currentPage > 1 ? (
          <Link
            href={createPageUrl(currentPage - 1)}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:flex")}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            {t("blog.previous")}
          </Link>
        ) : (
          <div className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:flex opacity-50 cursor-not-allowed")}>
            <ChevronLeft className="w-4 h-4 mr-1" />
            {t("blog.previous")}
          </div>
        )}
        
        {/* Previous Button - Mobile */}
        {currentPage > 1 ? (
            <Link
            href={createPageUrl(currentPage - 1)}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "sm:hidden")}
            >
            <ChevronLeft className="w-4 h-4" />
            </Link>
        ) : (
            <div className={cn(buttonVariants({ variant: "outline", size: "sm" }), "sm:hidden opacity-50 cursor-not-allowed")}>
            <ChevronLeft className="w-4 h-4" />
            </div>
        )}

        <div className="flex items-center space-x-1">
          {visiblePages.map((page, index) => (
            <div key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-gray-400">...</span>
              ) : (
                <Link
                  href={createPageUrl(page)}
                  className={cn(
                    buttonVariants({ variant: currentPage === page ? "default" : "outline", size: "sm" }),
                    "min-w-[40px]"
                  )}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Next Button - Desktop */}
        {currentPage < totalPages ? (
          <Link
            href={createPageUrl(currentPage + 1)}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:flex")}
          >
            {t("blog.next")}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        ) : (
          <div className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:flex opacity-50 cursor-not-allowed")}>
            {t("blog.next")}
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        )}
        
        {/* Next Button - Mobile */}
        {currentPage < totalPages ? (
          <Link
            href={createPageUrl(currentPage + 1)}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "sm:hidden")}
          >
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <div className={cn(buttonVariants({ variant: "outline", size: "sm" }), "sm:hidden opacity-50 cursor-not-allowed")}>
            <ChevronRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  )
}
